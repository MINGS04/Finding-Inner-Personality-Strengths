/**
 * 배포 설정 파일
 * ----------------------------------------------------------
 * 1. Google Apps Script를 웹앱으로 배포한 뒤 발급된 /exec URL을
 *    appsScriptUrl 안에 붙여넣으세요.
 * 2. 이 파일을 수정한 뒤 GitHub에 업로드하면 됩니다.
 *
 * 예:
 * appsScriptUrl: "https://script.google.com/macros/s/AKfycbyoEwBhQtAXrOE_ulOfPs_gPvsxKPMZj2iK7LguYM3XgmXtEAba2iGikROddcKHPACC/exec"
 */
window.TEST_CONFIG = Object.freeze({
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbyoEwBhQtAXrOE_ulOfPs_gPvsxKPMZj2iK7LguYM3XgmXtEAba2iGikROddcKHPACC/exec",

  // 중앙 저장 사용 여부. URL이 비어 있으면 자동으로 로컬 백업만 수행합니다.
  centralStorageEnabled: true,

  // 전송 실패 시 동일 응답을 다시 보내기 위한 재시도 설정입니다.
  saveRetries: 3,
  retryDelayMs: 700,
  requestTimeoutMs: 9000,
  retryIntervalMs: 12000,

  // 브라우저 로컬 백업/재전송 대기열 키
  localStorageKey: "forest_strength_test_records_v12",
  pendingStorageKey: "forest_strength_test_pending_v12"
});
