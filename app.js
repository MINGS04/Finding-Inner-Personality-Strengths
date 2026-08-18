const USER_CONFIG = window.TEST_CONFIG || {};

const CONFIG = Object.freeze({
  apiUrl: String(USER_CONFIG.appsScriptUrl || "").trim(),
  centralStorageEnabled: USER_CONFIG.centralStorageEnabled !== false,
  loadingDelayMs: 1200,
  saveRetries: Number(USER_CONFIG.saveRetries || 3),
  retryDelayMs: Number(USER_CONFIG.retryDelayMs || 700),
  requestTimeoutMs: Number(USER_CONFIG.requestTimeoutMs || 9000),
  retryIntervalMs: Number(USER_CONFIG.retryIntervalMs || 12000),
  localStorageKey: USER_CONFIG.localStorageKey || "forest_strength_test_records_v12",
  pendingStorageKey: USER_CONFIG.pendingStorageKey || "forest_strength_test_pending_v12",
});

const TRAITS = {
  FOX: {
    key: "FOX",
    name: "여우",
    emoji: "🦊",
    className: "fox",
    colorClass: "color-fox",
    bgColor: "rgb(255, 238, 228)",
    label: "개방성",
    fullTitle: "호기심 대장 탐험가 여우",
    image: "assets/fox.png",
    tagline: "궁금해하고, 상상하며, 새로움을 발견하는",
    intro1: "처음 보는 것이나 새로운 장소를 만나면 자연스럽게 궁금해지고, 이곳저곳 살펴보는 여우.",
    intro2: "새로운 생각과 가능성을 떠올리는 것을 좋아하기에, 익숙한 것에서도 새로운 모습과 재미를 발견하고 자기만의 상상으로 넓혀가곤 하죠 :)",
    bullets: [
      "처음 배우는 내용이 나오면 “왜 그럴까?” 하고 궁금해진다",
      "숙제나 활동을 할 때 “이렇게 해보면 어떨까?” 하고 생각해본다",
      "여행이나 산책 중 멋진 풍경을 보면 눈여겨보거나 이야기를 상상해본다",
    ],
    strengths: ["호기심", "창의적 상상력", "새로운 생각을 떠올리는 힘", "아름다움을 발견하는 눈"],
  },
  BEAVER: {
    key: "BEAVER",
    name: "비버",
    emoji: "🦫",
    className: "beaver",
    colorClass: "color-beaver",
    bgColor: "rgb(234, 249, 255)",
    label: "성실성",
    fullTitle: "든든한 숲속의 살림꾼 비버",
    image: "assets/beaver.png",
    tagline: "계획하고, 정리하며, 끝까지",
    intro1: "쉴 곳을 정리하고 필요한 먹이를 미리 챙기며, 겨울이 오기 전부터 먹이를 차곡차곡 모아두는 비버.",
    intro2: "해야 할 일을 미리 살피고 하나씩 정리해 나가는 편이라, 맡은 일도 꾸준히 이어가며 끝까지 마무리하곤 하죠 :)",
    bullets: [
      "학교에 가기 전 준비물이나 시간표를 미리 확인하는 편이다",
      "해야 할 일이 많으면 순서를 정해 하나씩 해나간다",
      "맡은 일은 잊지 않고 끝까지 마치려고 한다",
    ],
    strengths: ["계획성", "정리하는 힘", "책임감", "꾸준한 실행력"],
  },
  DOG: {
    key: "DOG",
    name: "강아지",
    emoji: "🐶",
    className: "dog",
    colorClass: "color-dog",
    bgColor: "rgb(255, 250, 228)",
    label: "외향성",
    fullTitle: "발랄한 분위기 메이커 강아지",
    image: "assets/dog.png",
    tagline: "다가가고, 어울리며, 신나게",
    intro1: "들판에서 친구들과 신나게 뛰어놀고, 처음 만난 친구에게도 반갑게 인사하는 강아지.",
    intro2: "사람들과 함께할 때 에너지가 살아나고, 필요할 때는 자기 생각도 자신 있게 표현하며 주변에 자연스럽게 활기를 더해요 :)",
    bullets: [
      "새 학기에 먼저 인사하거나 말을 걸어보는 편이다",
      "쉬는 시간이나 모임에서 친구들과 이야기하고 함께할 때 더 즐겁다",
      "의견을 말해야 할 때 머뭇거리기보다 내 생각을 말해보는 편이다",
    ],
    strengths: ["사교성", "활기찬 에너지", "자신감 있는 표현", "먼저 다가가는 힘"],
  },
  BEAR: {
    key: "BEAR",
    name: "곰",
    emoji: "🐻",
    className: "bear",
    colorClass: "color-bear",
    bgColor: "rgb(228, 244, 236)",
    label: "우호성",
    fullTitle: "따뜻하고 다정한 수호천사 곰",
    image: "assets/bear.png",
    tagline: "믿고, 배려하며, 함께",
    intro1: "먹이를 이웃과 나누고, 새 친구를 편안하게 맞아주며, 함께 갈 때는 다른 친구의 속도도 살피는 곰.",
    intro2: "주변 사람을 따뜻한 시선으로 바라보고 존중하며, 서로 편안하게 함께하는 것을 중요하게 여기는 다정함을 가지고 있어요 :)",
    bullets: [
      "새로운 친구가 생기면 낯설어도 편하게 대해보는 편이다",
      "친구와 생각이 다를 때 “그럴 수도 있지” 하며 이야기를 들어본다",
      "함께 먹거나 쓸 것이 있으면 주변 사람과 나누는 편이다",
    ],
    strengths: ["사람을 믿는 마음", "배려심", "존중하는 태도", "함께하는 힘"],
  },
  CAT: {
    key: "CAT",
    name: "고양이",
    emoji: "🐱",
    className: "cat",
    colorClass: "color-cat",
    bgColor: "rgb(252, 243, 255)",
    label: "민감성",
    fullTitle: "섬세한 관찰자 고양이",
    image: "assets/cat.png",
    tagline: "작은 변화를 알아차리고, 깊이 느끼는",
    intro1: "바람과 소리, 친구의 표정과 분위기처럼 주변의 작은 변화를 찬찬히 살펴보는 고양이.",
    intro2: "주변의 미묘한 변화와 분위기를 세심하게 느끼는 편이라, 인상적인 순간이나 아름다운 장면도 깊이 받아들이곤 하죠 :)",
    bullets: [
      "친구의 말투나 표정이 평소와 달라지면 자연스럽게 눈에 들어온다",
      "사람이 많거나 소리가 큰 곳에서는 잠깐 조용히 쉬고 싶을 때가 있다",
      "좋아하는 노래나 인상적인 장면은 오래 마음에 남아 다시 떠오른다",
    ],
    strengths: ["섬세한 관찰력", "풍부한 감수성", "깊이 생각하는 힘", "감각의 섬세함"],
  },
};

const TRAIT_ORDER = ["FOX", "BEAVER", "DOG", "BEAR", "CAT"];
const FOREST_IMAGE = "assets/forest_bg.png";

const SCORED_QUESTIONS = [
  {
    number: 6, code: "Q6", prompt: "숲에서 간만에 한가로운 하루,\n이때의 나는?",
    weights: { FOX: 50, BEAVER: 52, DOG: 53, BEAR: 59, CAT: 58 },
    options: [
      { trait: "FOX", text: "안 가본 길을 보니 그 너머가 궁금해져 천천히 탐험한다" },
      { trait: "DOG", text: "동물 친구들과 어울려 들판에서 신나게 뛰어논다" },
      { trait: "CAT", text: "언덕에서 바람과 풍경의 작은 변화를 느껴본다" },
      { trait: "BEAVER", text: "쉴 곳을 정리하고 필요한 먹이를 차곡차곡 챙겨둔다" },
      { trait: "BEAR", text: "먹이를 이웃과 나누고 주변 친구들을 살뜰히 챙긴다" },
    ],
  },
  {
    number: 7, code: "Q7", prompt: "처음 보는 동물이 숲에 이사 왔다!\n이때의 나는?",
    weights: { FOX: 51, BEAVER: 51, DOG: 59, BEAR: 58, CAT: 50 },
    options: [
      { trait: "BEAR", text: "새 친구와도 잘 지낼 수 있을 거라 생각하며 편안하게 맞아준다" },
      { trait: "FOX", text: "“넌 어디서 왔어~?”, “거긴 어땠어??” 새 친구가 살던 곳이 궁금해 이것저것 물어본다" },
      { trait: "BEAVER", text: "새 친구에게 숲에서 지켜야 할 약속을 하나씩, 차근차근 알려준다" },
      { trait: "DOG", text: "새 친구에게 반갑게 인사하고 금세 다른 친구들과 함께 어울린다" },
      { trait: "CAT", text: "새 친구의 표정과 분위기를 먼저 살펴본다" },
    ],
  },
  {
    number: 8, code: "Q8", prompt: "숲에 갑자기 비가 엄청 쏟아진다!\n이때의 나는?",
    weights: { FOX: 58, BEAVER: 53, DOG: 56, BEAR: 51, CAT: 57 },
    options: [
      { trait: "FOX", text: "‘비가 오면 숲이 어떻게 달라질까?’ 궁금해 안전한 곳에서 숲을 살펴본다" },
      { trait: "BEAVER", text: "미리 봐둔 안전한 굴로 가서 필요한 것을 하나씩 점검한다" },
      { trait: "DOG", text: "친구들에게 “저쪽으로 가자!”고 자신 있게 말하며 함께 움직인다" },
      { trait: "CAT", text: "주변이 시끄러워지면, 조용히 비를 피하며 상황을 살펴본다" },
      { trait: "BEAR", text: "주변에 도움이 필요한 친구가 있는지 살펴 함께 안전한 곳으로 이동한다" },
    ],
  },
  {
    number: 9, code: "Q9", prompt: "평소 지내던 숲을 떠나 먼 곳으로 여행을 간다면,\n이때의 나는?",
    weights: { FOX: 56, BEAVER: 55, DOG: 57, BEAR: 54, CAT: 54 },
    options: [
      { trait: "FOX", text: "처음 가는 곳에는 무엇이 있을지 상상하며 이곳저곳 둘러보고 싶다" },
      { trait: "DOG", text: "여행 생각만 해도 신이 나서 발걸음부터 가벼워진다" },
      { trait: "BEAVER", text: "길과 먹이, 필요한 것을 미리 꼼꼼하게 챙긴다" },
      { trait: "BEAR", text: "뒤처지는 친구의 속도에 맞춰 함께 간다" },
      { trait: "CAT", text: "처음 가는 곳에 소리도 많고 볼 것도 많으면, 주변을 천천히 둘러본다" },
    ],
  },
  {
    number: 10, code: "Q10", prompt: "숲속 친구들은 나를 이렇게 불러~!",
    weights: { FOX: 52, BEAVER: 56, DOG: 52, BEAR: 52, CAT: 52 },
    options: [
      { trait: "BEAR", text: "다른 친구를 배려하고 얘기를 잘 들어주는 친구" },
      { trait: "CAT", text: "작은 변화도 잘 알아차리고 깊게 생각하는 친구" },
      { trait: "DOG", text: "친구들과 잘 어울리고 활기를 더하는 친구" },
      { trait: "FOX", text: "새로운 생각을 잘 떠올리고 궁금한 게 많은 친구" },
      { trait: "BEAVER", text: "맡은 일을 끝까지 해내는 든든한 친구" },
    ],
  },
  {
    number: 11, code: "Q11", prompt: "겨울이 다가온다!\n이때의 나는?",
    weights: { FOX: 55, BEAVER: 58, DOG: 50, BEAR: 55, CAT: 55 },
    options: [
      { trait: "CAT", text: "겨울 숲의 차가워진 공기와 달라진 바람 소리를 찬찬히 느껴본다" },
      { trait: "FOX", text: "겨울에만 볼 수 있는 눈 쌓인 풍경을 보며 아름다운 모습을 하나씩 찾아본다" },
      { trait: "BEAR", text: "친구가 겨울 준비를 힘들어하면 곁에서 함께 도와준다" },
      { trait: "DOG", text: "친구들을 찾아가 ‘같이 밖에서 놀자!’고 얘기한다" },
      { trait: "BEAVER", text: "미리 계획을 세워 먹이를 꾸준히 모은다" },
    ],
  },
  {
    number: 12, code: "Q12", prompt: "숲속 깊은 곳에서 한 번도 본 적 없는 아름다운 풍경을 발견했다!\n이때의 나는?",
    weights: { FOX: 59, BEAVER: 50, DOG: 51, BEAR: 50, CAT: 56 },
    options: [
      { trait: "FOX", text: "아름다운 풍경을 보며 그곳에는 어떤 이야기가 숨어 있을지 상상해본다" },
      { trait: "BEAVER", text: "돌아갈 길을 잊지 않도록 주변을 확인하고 표시를 남겨둔다" },
      { trait: "CAT", text: "그 풍경이 주는 느낌에 푹 빠져 한참 바라본다" },
      { trait: "DOG", text: "바로 친구들한테 달려가 같이 보러 가자고 신나게 말한다" },
      { trait: "BEAR", text: "이 풍경을 꼭 함께 보여주고 싶은 친구가 먼저 떠오른다" },
    ],
  },
  {
    number: 13, code: "Q13", prompt: "친구들과 함께 숲 축제를 준비하게 되었다!\n이때의 나는?",
    weights: { FOX: 57, BEAVER: 59, DOG: 58, BEAR: 56, CAT: 51 },
    options: [
      { trait: "DOG", text: "내 생각을 자신 있게 말하고 “이렇게 해보자!”며 먼저 움직인다" },
      { trait: "CAT", text: "여러 아이디어가 나오면 바로 고르기보다 하나씩 충분히 생각해본다" },
      { trait: "BEAVER", text: "해야 할 일과 순서를 정리하고, 내가 맡은 일은 끝까지 챙긴다" },
      { trait: "BEAR", text: "친구들의 의견을 하나씩 듣고 모두가 편하게 할 수 있는 방법을 찾아본다" },
      { trait: "FOX", text: "“어떻게 하면 더 재미있을까?” 생각하며 새로운 아이디어를 떠올려본다" },
    ],
  },
  {
    number: 14, code: "Q14", prompt: "친구들과 협동 요리 게임을 한다!\n이때의 나는?",
    weights: { FOX: 54, BEAVER: 57, DOG: 55, BEAR: 57, CAT: 59 },
    options: [
      { trait: "BEAVER", text: "주문이 들어오면 내가 맡은 일을 순서대로 해낸다" },
      { trait: "BEAR", text: "친구가 실수해도 탓하지 않고 괜찮다고 말해준다" },
      { trait: "DOG", text: "친구들과 계속 이야기하며 신나게 게임한다" },
      { trait: "FOX", text: "여러 방법을 떠올리며 우리 팀만의 전략을 찾아본다" },
      { trait: "CAT", text: "주문과 소리, 움직임이 한꺼번에 몰리면 잠깐 멈칫한다" },
    ],
  },
  {
    number: 15, code: "Q15", prompt: "신나는 음악도 들리고 볼거리도 많은 옆 동네의 큰 숲 축제에 도착했다!\n이때의 나는?",
    weights: { FOX: 53, BEAVER: 54, DOG: 54, BEAR: 53, CAT: 53 },
    options: [
      { trait: "FOX", text: "처음 보는 놀이나 신기한 곳이 궁금해 이곳저곳 구경해본다" },
      { trait: "BEAR", text: "함께 온 친구에게 가보고 싶은 곳도 물어보며 같이 둘러본다" },
      { trait: "BEAVER", text: "축제 지도부터 보며 가보고 싶은 곳을 살펴보고 어디부터 둘러볼지 정해본다" },
      { trait: "CAT", text: "마음에 드는 음악이나 장식이 있으면 잠시 멈춰 그 분위기를 즐긴다" },
      { trait: "DOG", text: "친구들과 여기저기 신나게 참여하며 축제를 즐긴다" },
    ],
  },
];

const PAIR_TEXT = {
  "FOX-BEAVER": "내가 떠올린 새로운 아이디어를 차근차근 현실로 옮겨주는 든든한 실행 파트너!",
  "FOX-DOG": "새로운 것이 궁금하거나 재미있는 생각을 나눌 때, 신나게 호응하며 함께해 주는 단짝 친구!",
  "BEAVER-FOX": "꼼꼼하게 세운 계획표에 반짝이는 재미와 상상력을 더해주는 기발한 친구!",
  "BEAVER-BEAR": "내가 계획한 일을 차근차근 해나갈 때, 곁에서 주변을 살피며 함께해 주는 든든한 조력자!",
  "DOG-BEAR": "내가 신나게 친구들과 어울릴 때, 주변을 살피며 모두가 함께할 수 있게 챙겨주는 다정한 파트너!",
  "DOG-FOX": "새로운 놀이와 재미있는 아이디어를 더해주는 신나는 놀이 메이트!",
  "BEAR-CAT": "말투나 분위기의 작은 변화도 세심하게 살피며, 조용히 마음을 나눌 수 있는 친구!",
  "BEAR-DOG": "내가 조용히 친구들을 챙길 때, 옆에서 분위기에 활기를 더해주는 친구!",
  "CAT-BEAR": "내 이야기를 편안하게 들어주고 따뜻하게 대해주는 숲속의 안식처 같은 친구!",
  "CAT-BEAVER": "복잡한 상황도 차근차근 정리해 주어 내가 편안함을 느끼게 해 주는 단짝!",
};

const PARTNER_MAP = {
  FOX: ["BEAVER", "DOG"],
  BEAVER: ["FOX", "BEAR"],
  DOG: ["BEAR", "FOX"],
  BEAR: ["CAT", "DOG"],
  CAT: ["BEAR", "BEAVER"],
};

const state = {
  stage: "landing",
  participant: { consent: false, school: "", grade: "", gender: "" },
  questionIndex: 0,
  answers: [],
  scores: zeroMap(),
  counts: zeroMap(),
  rankings: [],
  saveStatus: null,
  responseId: "",
  submittedAt: "",
  timing: {
    q1StartedAtMs: null,
    q6StartedAtMs: null,
    q15CompletedAtMs: null,
  },
};

const app = document.getElementById("app");

function zeroMap() { return { FOX: 0, BEAVER: 0, DOG: 0, BEAR: 0, CAT: 0 }; }
function escapeHtml(text) {
  return String(text ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;");
}
function getPairText(primary, secondary) {
  return PAIR_TEXT[`${primary}-${secondary}`] || `${TRAITS[primary].name}의 강점에 ${TRAITS[secondary].name}의 강점이 더해져, 서로를 균형 있게 보완하는 조합이에요.`;
}

function markQ1Start() {
  if (!state.timing.q1StartedAtMs) state.timing.q1StartedAtMs = Date.now();
}

function markQ6Start() {
  if (!state.timing.q6StartedAtMs) state.timing.q6StartedAtMs = Date.now();
}

function markQ15Complete() {
  if (!state.timing.q15CompletedAtMs) state.timing.q15CompletedAtMs = Date.now();
}

function toIsoOrEmpty(ms) {
  return ms ? new Date(ms).toISOString() : "";
}

function durationSeconds(startMs, endMs) {
  if (!startMs || !endMs || endMs < startMs) return null;
  return Math.round(((endMs - startMs) / 1000) * 10) / 10;
}

function buildTimingPayload() {
  const t = state.timing;
  return {
    q1StartedAt: toIsoOrEmpty(t.q1StartedAtMs),
    q6StartedAt: toIsoOrEmpty(t.q6StartedAtMs),
    q15CompletedAt: toIsoOrEmpty(t.q15CompletedAtMs),
    q1ToQ15Seconds: durationSeconds(t.q1StartedAtMs, t.q15CompletedAtMs),
    q6ToQ15Seconds: durationSeconds(t.q6StartedAtMs, t.q15CompletedAtMs),
  };
}

function resetTest() {
  // "다시 검사하기"를 눌러도 이전 검사의 중앙 저장 대기 자료는 삭제하지 않습니다.
  // 새 검사를 시작하기 전에 백그라운드 재전송도 즉시 한 번 시도합니다.
  flushPendingRecords().catch(err => console.warn("재검사 전 대기 응답 전송 실패", err));

  state.stage = "landing";
  state.participant = { consent: false, school: "", grade: "", gender: "" };
  state.questionIndex = 0;
  state.answers = [];
  state.scores = zeroMap();
  state.counts = zeroMap();
  state.rankings = [];
  state.saveStatus = null;
  state.responseId = "";
  state.submittedAt = "";
  state.timing = {
    q1StartedAtMs: null,
    q6StartedAtMs: null,
    q15CompletedAtMs: null,
  };
  render();
}

function basicProgress(step, total, label, percent) {
  const progress = percent ?? (step / total * 100);
  return `
    <div class="progress-wrap">
      <div class="progress-head"><span>${label}</span><span>${step} / ${total}</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${Math.max(0, Math.min(100, progress))}%"></div></div>
    </div>
  `;
}

function setScreen(html) {
  app.innerHTML = `<section class="screen">${html}</section>`;
}

function render() {
  switch(state.stage) {
    case "landing": return renderLanding();
    case "consent": return renderConsent();
    case "school": return renderSchool();
    case "grade": return renderGrade();
    case "gender": return renderGender();
    case "guide": return renderGuide();
    case "question": return renderQuestion();
    case "loading": return renderLoading();
    case "result": return renderResult();
  }
}

function renderLanding() {
  app.innerHTML = `
    <section class="landing-screen">
      <h1 class="landing-title">내 안의 성격 강점 찾기</h1>
      <p class="landing-subtitle">“내가 평화로운 숲에 사는 동물이라면…”</p>
      <img src="${FOREST_IMAGE}" alt="숲속 오두막" class="landing-forest" />
      <div>
        <button class="btn-primary landing-start" id="startBtn">테스트 시작하기</button>
      </div>
    </section>
  `;
  document.getElementById("startBtn").onclick = () => { state.stage = "consent"; render(); };
}

function renderConsent() {
  markQ1Start();
  setScreen(`
    ${basicProgress(1, 15, "Q1")}
    <div class="center">
      <h2 class="question-title">Q1.</h2>
      <p class="question-prompt">강점 탐색 활동 참여에 동의하십니까?</p>
      <div class="button-row" style="justify-content:center;">
        <button class="btn-primary" id="agreeBtn">네!</button>
      </div>
    </div>
  `);
  document.getElementById("agreeBtn").onclick = () => { state.participant.consent = true; state.stage = "school"; render(); };
}

function renderSchool() {
  setScreen(`
    ${basicProgress(2, 15, "Q2")}
    <h2 class="question-title">Q2.</h2>
    <p class="question-prompt">현재 다니고 있는 학교를 입력해주세요!<br />(예: 00초 / 00중 / 00고)</p>
    <div class="form-field"><input id="schoolInput" class="text-input" placeholder="학교명을 입력해 주세요." value="${escapeHtml(state.participant.school)}" /></div>
    <div class="button-row">
      <button class="btn-secondary" id="backBtn">이전</button>
      <button class="btn-primary" id="nextBtn">입력했어요!</button>
    </div>
  `);
  document.getElementById("backBtn").onclick = () => { state.stage = "consent"; render(); };
  document.getElementById("nextBtn").onclick = () => {
    const value = document.getElementById("schoolInput").value.trim();
    if (!value) return alert("학교명을 입력해주세요.");
    state.participant.school = value;
    state.stage = "grade";
    render();
  };
}

function renderGrade() {
  const grades = ["1학년","2학년","3학년","4학년","5학년","6학년"];
  setScreen(`
    ${basicProgress(3, 15, "Q3")}
    <h2 class="question-title">Q3.</h2>
    <p class="question-prompt">몇 학년인가요?</p>
    <div class="choice-grid columns-3">
      ${grades.map(g => `<button class="choice-button ${state.participant.grade===g?"active":""}" data-grade="${g}">${g}</button>`).join("")}
    </div>
    <div class="button-row">
      <button class="btn-secondary" id="backBtn">이전</button>
      <button class="btn-primary" id="nextBtn">다음</button>
    </div>
  `);
  document.querySelectorAll("[data-grade]").forEach(btn => btn.onclick = () => { state.participant.grade = btn.dataset.grade; render(); });
  document.getElementById("backBtn").onclick = () => { state.stage = "school"; render(); };
  document.getElementById("nextBtn").onclick = () => {
    if (!state.participant.grade) return alert("학년을 선택해주세요.");
    state.stage = "gender"; render();
  };
}

function renderGender() {
  const genders = ["남", "여"];
  setScreen(`
    ${basicProgress(4, 15, "Q4")}
    <h2 class="question-title">Q4.</h2>
    <p class="question-prompt">성별을 알려주세요!</p>
    <div class="choice-grid columns-2">
      ${genders.map(g => `<button class="choice-button ${state.participant.gender===g?"active":""}" data-gender="${g}">${g}</button>`).join("")}
    </div>
    <div class="button-row">
      <button class="btn-secondary" id="backBtn">이전</button>
      <button class="btn-primary" id="nextBtn">다음</button>
    </div>
  `);
  document.querySelectorAll("[data-gender]").forEach(btn => btn.onclick = () => { state.participant.gender = btn.dataset.gender; render(); });
  document.getElementById("backBtn").onclick = () => { state.stage = "grade"; render(); };
  document.getElementById("nextBtn").onclick = () => {
    if (!state.participant.gender) return alert("성별을 선택해주세요.");
    state.stage = "guide"; render();
  };
}

function renderGuide() {
  setScreen(`
    ${basicProgress(5, 15, "Q5")}
    <div class="center">
      <img src="${FOREST_IMAGE}" alt="숲속 이미지" class="hero-image" />
      <h2 class="main-title" style="font-size:clamp(25px,3.5vw,34px); margin-top:18px;">자, 이제 가벼운 마음으로 상상해 봐~!</h2>
      <p class="paragraph">너는 지금부터 낯선 일이 가득한 신비로운 숲속을 탐험하게 될 거야.<br />이 숲속에서 너는 과연 어떤 행동을 하게 될까?<br />상상하며 답하다 보면, ‘내 안의 성격 강점’을 쏙 빼닮은 나만의 특별한 동물을 만날 수 있어.</p>
      <p class="paragraph">본격적으로 네 강점을 닮은 동물을 찾으러 출발해 보자!</p>
      <div class="button-row" style="justify-content:center;">
        <button class="btn-secondary" id="backBtn">이전</button>
        <button class="btn-primary" id="goBtn">출발~!</button>
      </div>
    </div>
  `);
  document.getElementById("backBtn").onclick = () => { state.stage = "gender"; render(); };
  document.getElementById("goBtn").onclick = () => { state.stage = "question"; state.questionIndex = 0; render(); };
}

function renderQuestion() {
  const q = SCORED_QUESTIONS[state.questionIndex];
  if (q.code === "Q6") markQ6Start();
  const stepNumber = 6 + state.questionIndex;
  setScreen(`
    ${basicProgress(stepNumber, 15, q.code, ((state.questionIndex+1)/SCORED_QUESTIONS.length)*100)}
    <h2 class="question-title">${q.code}.</h2>
    <p class="question-prompt">${q.prompt.replace(/\n/g, "<br />")}</p>
    <div class="options">
      ${q.options.map((opt, idx) => {
        return `<button class="option" data-index="${idx}"><span class="option-text">${opt.text}</span></button>`;
      }).join("")}
    </div>
    <div class="button-row"><button class="btn-secondary" id="backBtn">이전</button></div>
  `);
  document.querySelectorAll(".option").forEach(btn => btn.onclick = () => selectOption(Number(btn.dataset.index)));
  document.getElementById("backBtn").onclick = goPrevQuestion;
}

function selectOption(optionIndex) {
  const q = SCORED_QUESTIONS[state.questionIndex];
  const chosen = q.options[optionIndex];
  const points = q.weights[chosen.trait];

  state.answers[state.questionIndex] = {
    questionCode: q.code,
    questionNumber: q.number,
    prompt: q.prompt.replace(/\n/g, " "),
    selectedIndex: optionIndex,
    selectedText: chosen.text,
    trait: chosen.trait,
    points,
    // 기존 v12 Apps Script가 Q*_weight 열을 answer.rank에서 읽으므로
    // 실제 적용 가중치(50~59점)를 호환 필드에도 함께 저장합니다.
    rank: points,
    weight: points,
  };

  if (state.questionIndex < SCORED_QUESTIONS.length - 1) {
    state.questionIndex += 1;
    render();
  } else {
    markQ15Complete();
    finalizeResults();
  }
}

function goPrevQuestion() {
  if (state.questionIndex === 0) {
    state.stage = "guide"; render(); return;
  }
  state.questionIndex -= 1;
  render();
}

function finalizeResults() {
  state.responseId = createResponseId();
  state.submittedAt = new Date().toISOString();
  state.scores = zeroMap();
  state.counts = zeroMap();
  state.answers.forEach(answer => {
    state.scores[answer.trait] += answer.points;
    state.counts[answer.trait] += 1;
  });
  state.rankings = TRAIT_ORDER.map(key => ({ key, score: state.scores[key], count: state.counts[key] }))
    .sort((a,b) => b.score - a.score || b.count - a.count || TRAIT_ORDER.indexOf(a.key) - TRAIT_ORDER.indexOf(b.key));
  state.stage = "loading";
  render();
  setTimeout(async () => { await persistResult(); state.stage = "result"; render(); }, CONFIG.loadingDelayMs);
}

function renderLoading() {
  app.innerHTML = `
    <section class="loading-box">
      <div class="loader"></div>
      <h2>결과 분석중</h2>
      <p class="note">응답을 정리하고 나와 가장 가까운 강점을 계산하고 있어요.</p>
    </section>
  `;
}

function renderResult() {
  const ranked = state.rankings;
  const top1 = ranked[0];
  const top2 = ranked[1];
  const top3 = ranked[2];
  const other1 = ranked[3];
  const other2 = ranked[4];
  const t1 = TRAITS[top1.key];
  const t2 = TRAITS[top2.key];
  const t3 = TRAITS[top3.key];
  const t4 = TRAITS[other1.key];
  const t5 = TRAITS[other2.key];
  const partners = PARTNER_MAP[top1.key].map(key => TRAITS[key]);

  app.innerHTML = `
    <section class="screen result-screen" style="background:${t1.bgColor}; box-shadow:none;">
      <div class="result-hero">
        <img src="${t1.image}" alt="${t1.fullTitle}" class="result-character" />
      </div>

      <div class="primary-result-card">
        <div class="center">
          <div style="font-size:18px; margin-bottom:8px;">나와 가장 가까운 유형은 <strong>[${t1.label}]</strong></div>
          <h2 class="result-title ${t1.colorClass}">${t1.fullTitle}</h2>
          <div class="trait-tagline">“${t1.tagline}”</div>
        </div>
        <p class="paragraph">${t1.intro1}</p>
        <p class="paragraph">${t1.intro2}</p>
        <div class="section-title">평소 나의 이런 모습으로 나타날 수 있어요</div>
        <ul class="bullet-list">${t1.bullets.map(v => `<li>${v}</li>`).join("")}</ul>
        <div class="section-title">나의 강점</div>
        <div class="strengths">${t1.strengths.join(", ")}</div>

        <div class="section-title">환상의 동물 짝꿍은 ~</div>
        <div class="partner-grid">
          ${partners.map(p => `
            <div class="partner-card">
              <strong>${p.name} ${p.emoji}</strong>
              ${getPairText(top1.key, p.key)}
            </div>
          `).join("")}
        </div>
      </div>

      <h3 class="secondary-heading">나와 함께 가까이 나타난 유형</h3>
      <div class="secondary-ranks">
        ${renderSecondaryCard("2순위", t2)}
        ${renderSecondaryCard("3순위", t3)}
      </div>

      <div class="other-strengths">
        <h3>그리고, 내 안에 함께 있는 또 다른 강점들</h3>
        <p class="guide">사람에게는 한 가지 성격만 있는 것이 아니에요. 이번 활동에서 상대적으로 덜 두드러졌지만, 아래 강점들도 모두 내 안에 함께 있을 수 있어요.</p>
        <div class="other-trait-list">
          ${renderOtherTrait(t4)}
          ${renderOtherTrait(t5)}
        </div>
      </div>

      <div class="button-row" style="justify-content:center; margin-top:26px;">
        <button class="btn-primary" id="restartBtn">다시 검사하기</button>
      </div>
      <p class="footer-note" style="text-align:center;">※ 이 결과는 나를 한 가지 성격으로 정하는 것이 아니라, 이번 활동에서 상대적으로 많이 나타난 강점을 보여줘요.</p>
    </section>
  `;

  document.getElementById("restartBtn").onclick = resetTest;
}

function renderSecondaryCard(rankLabel, trait) {
  return `
    <div class="secondary-card">
      <span class="secondary-rank-label">${rankLabel}</span>
      <img src="${trait.image}" alt="${trait.fullTitle}" />
      <h4 class="${trait.colorClass}">${trait.fullTitle}</h4>
      <p class="mini-tagline">“${trait.tagline}”</p>
      <div class="mini-strengths">${trait.strengths.join(" · ")}</div>
    </div>
  `;
}

function renderOtherTrait(trait) {
  return `
    <div class="other-trait-card">
      <img src="${trait.image}" alt="${trait.fullTitle}" />
      <div>
        <strong class="${trait.colorClass}">${trait.fullTitle}</strong>
        <span>“${trait.tagline}”</span>
      </div>
    </div>
  `;
}

function createResponseId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return [
    Date.now().toString(36),
    Math.random().toString(36).slice(2, 10),
    Math.random().toString(36).slice(2, 10)
  ].join("-");
}

function readJsonArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (e) {
    console.warn("로컬 데이터 읽기 실패:", key, e);
    return [];
  }
}

function writeJsonArray(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn("로컬 데이터 저장 실패:", key, e);
    return false;
  }
}

function upsertByResponseId(key, payload) {
  const rows = readJsonArray(key);
  const index = rows.findIndex(row => row && row.responseId === payload.responseId);
  if (index >= 0) rows[index] = payload;
  else rows.push(payload);
  writeJsonArray(key, rows);
}

function removePendingByResponseId(responseId) {
  const rows = readJsonArray(CONFIG.pendingStorageKey)
    .filter(row => row && row.responseId !== responseId);
  writeJsonArray(CONFIG.pendingStorageKey, rows);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * GitHub Pages처럼 다른 출처(origin)에서 Apps Script 웹앱으로 보내기 위한
 * 단방향 POST입니다.
 *
 * - text/plain을 사용해 JSON을 그대로 전달합니다.
 * - no-cors POST 뒤에 JSONP 상태조회로 responseId의 실제 중앙 저장 여부를 확인합니다.
 * - 서버 쪽에서는 responseId로 중복 저장을 방지하므로 재시도해도 안전합니다.
 */
function verifyCentralSave(responseId) {
  if (!CONFIG.apiUrl || !responseId) return Promise.resolve(false);

  return new Promise(resolve => {
    const callbackName = `__strengthSaveAck_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    let finished = false;

    const cleanup = (result) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      try { delete window[callbackName]; } catch (_) { window[callbackName] = undefined; }
      script.remove();
      resolve(Boolean(result));
    };

    window[callbackName] = (data) => {
      cleanup(data && data.ok === true && data.found === true);
    };

    const separator = CONFIG.apiUrl.includes("?") ? "&" : "?";
    script.src =
      `${CONFIG.apiUrl}${separator}action=status` +
      `&responseId=${encodeURIComponent(responseId)}` +
      `&callback=${encodeURIComponent(callbackName)}` +
      `&_=${Date.now()}`;

    script.async = true;
    script.onerror = () => cleanup(false);

    const timer = setTimeout(() => cleanup(false), CONFIG.requestTimeoutMs);
    document.head.appendChild(script);
  });
}

async function sendToCentralStore(payload) {
  if (!CONFIG.centralStorageEnabled || !CONFIG.apiUrl) return false;

  const body = JSON.stringify(payload);
  const attempts = Math.max(1, CONFIG.saveRetries);

  for (let attempt = 1; attempt <= attempts; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), CONFIG.requestTimeoutMs);

    try {
      // GitHub Pages -> Apps Script 교차 출처 POST.
      // 응답 자체는 no-cors로 읽지 않고, 바로 아래 JSONP 상태조회로
      // 실제 responseId가 시트에 저장되었는지 별도로 확인합니다.
      await fetch(CONFIG.apiUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body,
        keepalive: true,
        signal: controller.signal
      });
      clearTimeout(timer);

      const confirmed = await verifyCentralSave(payload.responseId);
      if (confirmed) return true;

      console.warn(`중앙 저장 확인 ${attempt}/${attempts}회 실패`);
    } catch (error) {
      clearTimeout(timer);
      console.warn(`중앙 저장 전송 ${attempt}/${attempts}회 실패`, error);
    }

    if (attempt < attempts) {
      await sleep(CONFIG.retryDelayMs * attempt);
    }
  }

  return false;
}

let pendingFlushPromise = null;

async function persistResult() {
  const payload = buildPayload();

  // 1) 매 검사마다 고유 responseId로 브라우저에 영구 백업합니다.
  upsertByResponseId(CONFIG.localStorageKey, payload);

  // 2) 중앙 저장이 켜져 있으면 무조건 재전송 대기열에 먼저 넣습니다.
  if (!CONFIG.centralStorageEnabled || !CONFIG.apiUrl) {
    state.saveStatus = "local";
    return;
  }

  upsertByResponseId(CONFIG.pendingStorageKey, payload);
  state.saveStatus = "queued";

  // 3) 결과 화면을 오래 기다리게 하지 않고 백그라운드로 중앙 저장을 진행합니다.
  //    다시 검사하기를 눌러도 이 대기열은 유지됩니다.
  flushPendingRecords(payload.responseId)
    .then(() => {
      const stillPending = readJsonArray(CONFIG.pendingStorageKey)
        .some(row => row && row.responseId === payload.responseId);
      state.saveStatus = stillPending ? "pending" : "sent";
    })
    .catch(err => {
      state.saveStatus = "pending";
      console.warn("중앙 저장 백그라운드 전송 실패", err);
    });
}

async function flushPendingRecords(priorityResponseId = "") {
  if (!CONFIG.centralStorageEnabled || !CONFIG.apiUrl) return { sent: 0, pending: 0 };

  // 여러 이벤트(재검사, 온라인 복구, 주기 재시도)가 동시에 호출해도
  // 실제 전송 루프는 한 번만 실행합니다.
  if (pendingFlushPromise) return pendingFlushPromise;

  pendingFlushPromise = (async () => {
    let pending = readJsonArray(CONFIG.pendingStorageKey)
      .filter(payload => payload && payload.responseId);

    if (priorityResponseId) {
      pending.sort((a, b) => {
        if (a.responseId === priorityResponseId) return -1;
        if (b.responseId === priorityResponseId) return 1;
        return String(a.submittedAt || "").localeCompare(String(b.submittedAt || ""));
      });
    }

    let sentCount = 0;

    for (const payload of pending) {
      const sent = await sendToCentralStore(payload);
      if (sent) {
        removePendingByResponseId(payload.responseId);
        sentCount += 1;
      }
    }

    return {
      sent: sentCount,
      pending: readJsonArray(CONFIG.pendingStorageKey).length
    };
  })();

  try {
    return await pendingFlushPromise;
  } finally {
    pendingFlushPromise = null;
  }
}

function beaconPendingRecords() {
  if (!CONFIG.centralStorageEnabled || !CONFIG.apiUrl) return;
  if (!navigator.sendBeacon) return;

  const pending = readJsonArray(CONFIG.pendingStorageKey);
  pending.forEach(payload => {
    if (!payload || !payload.responseId) return;
    try {
      const blob = new Blob([JSON.stringify(payload)], { type: "text/plain;charset=UTF-8" });
      navigator.sendBeacon(CONFIG.apiUrl, blob);
    } catch (e) {
      console.warn("페이지 종료 직전 전송 실패", e);
    }
  });
}

function buildPayload() {
  return {
    schemaVersion: "15",
    responseId: state.responseId || createResponseId(),
    submittedAt: state.submittedAt || new Date().toISOString(),
    timing: buildTimingPayload(),
    participant: { ...state.participant },
    answers: state.answers,
    scores: state.scores,
    counts: state.counts,
    rankings: state.rankings.map((r, idx) => ({
      order: idx + 1,
      traitKey: r.key,
      traitName: TRAITS[r.key].name,
      score: r.score,
      count: r.count,
    })),
  };
}

function buildCsv() {
  const payload = buildPayload();
  const header = ["submittedAt","school","grade","gender","questionCode","selectedText","traitName","points"];
  const rows = payload.answers.map(ans => [payload.submittedAt, payload.participant.school, payload.participant.grade, payload.participant.gender, ans.questionCode, ans.selectedText, TRAITS[ans.trait].name, ans.points]);
  const summaryRows = payload.rankings.map(r => [payload.submittedAt, payload.participant.school, payload.participant.grade, payload.participant.gender, `RANK${r.order}`, r.traitName, r.score, r.count]);
  return [header, ...rows, ...summaryRows].map(cols => cols.map(csvEscape).join(",")).join("\n");
}
function csvEscape(value) {
  const str = String(value ?? "");
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}
function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

window.addEventListener("online", () => {
  flushPendingRecords().catch(err => console.warn("온라인 복구 후 재전송 실패", err));
});

window.addEventListener("focus", () => {
  flushPendingRecords().catch(err => console.warn("화면 복귀 후 재전송 실패", err));
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    flushPendingRecords().catch(err => console.warn("화면 재진입 후 재전송 실패", err));
  }
});

window.addEventListener("pagehide", beaconPendingRecords);

// 페이지가 열려 있는 동안에도 전송 대기 자료를 주기적으로 재시도합니다.
setInterval(() => {
  flushPendingRecords().catch(err => console.warn("주기 재전송 실패", err));
}, CONFIG.retryIntervalMs);

// 페이지를 처음 열 때 이전 검사에서 남은 대기 응답을 즉시 재시도합니다.
setTimeout(() => {
  flushPendingRecords().catch(err => console.warn("초기 대기 응답 재전송 실패", err));
}, 800);

render();
