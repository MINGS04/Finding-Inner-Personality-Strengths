const STORAGE_KEY = (window.TEST_CONFIG && window.TEST_CONFIG.localStorageKey) || "forest_strength_test_records_v12";
const PENDING_KEY = (window.TEST_CONFIG && window.TEST_CONFIG.pendingStorageKey) || "forest_strength_test_pending_v12";
const traitName = {FOX:"여우", BEAVER:"비버", DOG:"강아지", BEAR:"곰", CAT:"고양이"};

let selectedIndexes = new Set();

function records(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch(e){ return []; }
}

function saveRecords(data){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function render(){
  const data = records();
  // 데이터가 바뀌었을 때 존재하지 않는 선택 인덱스는 제거
  selectedIndexes = new Set([...selectedIndexes].filter(i => i >= 0 && i < data.length));

  const selectedCount = selectedIndexes.size;
  let pendingCount = 0;
  try { pendingCount = JSON.parse(localStorage.getItem(PENDING_KEY) || "[]").length; } catch(e) {}
  document.getElementById("summary").textContent = `현재 이 브라우저에 저장된 응답: ${data.length}건 · 중앙 전송 대기: ${pendingCount}건 · 선택: ${selectedCount}건`;

  const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");
  if (deleteSelectedBtn) deleteSelectedBtn.disabled = selectedCount === 0;

  const root = document.getElementById("tableRoot");
  if(!data.length){
    root.innerHTML = '<div class="empty">아직 저장된 응답이 없습니다.</div>';
    return;
  }

  const allSelected = data.length > 0 && selectedCount === data.length;

  root.innerHTML = `
    <table class="admin-table">
      <thead><tr>
        <th class="select-col"><input type="checkbox" id="selectAll" aria-label="전체 선택" ${allSelected ? 'checked' : ''}></th>
        <th>제출시각</th><th>학교</th><th>학년</th><th>성별</th>
        <th>1순위</th><th>2순위</th><th>3순위</th><th>4순위</th><th>5순위</th>
        <th>Q1~Q15 시간</th><th>Q6~Q15 시간</th><th>유형별 점수</th><th>선택 횟수</th><th>Q6~Q15 응답</th>
      </tr></thead>
      <tbody>
      ${data.map((r, index) => {
        const ranks = r.rankings || [];
        const answers = (r.answers || []).map(a => `${a.questionCode}: ${traitName[a.trait] || a.trait} / ${esc(a.selectedText)}`).join('<br>');
        const scores = Object.entries(r.scores || {}).map(([k,v]) => `${traitName[k]||k} ${v}`).join(' / ');
        const counts = Object.entries(r.counts || {}).map(([k,v]) => `${traitName[k]||k} ${v}회`).join(' / ');
        const checked = selectedIndexes.has(index) ? 'checked' : '';
        const selectedClass = selectedIndexes.has(index) ? ' class="selected-row"' : '';
        return `<tr${selectedClass}>
          <td class="select-col"><input type="checkbox" class="row-select" data-index="${index}" aria-label="${index + 1}번째 응답 선택" ${checked}></td>
          <td>${esc(formatDate(r.submittedAt || ''))}</td>
          <td>${esc(r.participant?.school || '')}</td>
          <td>${esc(r.participant?.grade || '')}</td>
          <td>${esc(r.participant?.gender || '')}</td>
          ${[0,1,2,3,4].map(i => `<td>${esc(ranks[i]?.traitName || '')}</td>`).join('')}
          <td>${esc(formatDuration(r.timing?.q1ToQ15Seconds))}</td>
          <td>${esc(formatDuration(r.timing?.q6ToQ15Seconds))}</td>
          <td>${esc(scores)}</td><td>${esc(counts)}</td><td>${answers}</td>
        </tr>`;
      }).join('')}
      </tbody>
    </table>`;

  document.getElementById('selectAll').onchange = (e) => {
    if (e.target.checked) {
      selectedIndexes = new Set(data.map((_, i) => i));
    } else {
      selectedIndexes.clear();
    }
    render();
  };

  document.querySelectorAll('.row-select').forEach(cb => {
    cb.onchange = () => {
      const index = Number(cb.dataset.index);
      if (cb.checked) selectedIndexes.add(index);
      else selectedIndexes.delete(index);
      render();
    };
  });
}

function deleteSelected(){
  const data = records();
  if (!selectedIndexes.size) return;

  const count = selectedIndexes.size;
  if (!confirm(`선택한 ${count}건의 응답을 삭제할까요?\n삭제한 자료는 이 브라우저에서 복구할 수 없습니다.`)) return;

  const filtered = data.filter((_, index) => !selectedIndexes.has(index));
  saveRecords(filtered);
  selectedIndexes.clear();
  render();
}

function esc(s){ return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function csvEscape(s){ s=String(s??''); return /[",\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s; }
function formatDate(value){
  if(!value) return '';
  const d = new Date(value);
  if(Number.isNaN(d.getTime())) return value;
  return new Intl.DateTimeFormat('ko-KR', {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(d);
}
function formatDuration(seconds){
  const n = Number(seconds);
  if(!Number.isFinite(n)) return '';
  const mins = Math.floor(n / 60);
  const secs = Math.round((n - mins * 60) * 10) / 10;
  return mins > 0 ? `${mins}분 ${secs}초` : `${secs}초`;
}
function downloadCsv(){
  const data = records();
  const header = ['submittedAt','school','grade','gender','q1_to_q15_seconds','q6_to_q15_seconds','rank1','rank2','rank3','rank4','rank5','FOX_score','BEAVER_score','DOG_score','BEAR_score','CAT_score','answers_json'];
  const rows = data.map(r => {
    const ranks=r.rankings||[];
    return [r.submittedAt||'', r.participant?.school||'', r.participant?.grade||'', r.participant?.gender||'', r.timing?.q1ToQ15Seconds??'', r.timing?.q6ToQ15Seconds??'', ...[0,1,2,3,4].map(i=>ranks[i]?.traitName||''), r.scores?.FOX||0, r.scores?.BEAVER||0, r.scores?.DOG||0, r.scores?.BEAR||0, r.scores?.CAT||0, JSON.stringify(r.answers||[])];
  });
  const csv='\uFEFF'+[header,...rows].map(row=>row.map(csvEscape).join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download='strength_test_all_responses.csv';
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById('refreshBtn').onclick=render;
document.getElementById('csvBtn').onclick=downloadCsv;
document.getElementById('deleteSelectedBtn').onclick=deleteSelected;
document.getElementById('clearBtn').onclick=()=>{
  if(confirm('이 브라우저에 저장된 검사 응답을 모두 삭제할까요?\n전체 삭제는 복구할 수 없습니다.')){
    localStorage.removeItem(STORAGE_KEY);
    selectedIndexes.clear();
    render();
  }
};
render();
