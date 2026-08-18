/**
 * 성격 강점 검사 배포 설정
 * Google Apps Script 중앙저장 연결용
 */

window.TEST_CONFIG = Object.freeze({
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbyoEwBhQtAXrOE_uIOfPs_gPvsxKPMZj2iK7LguYM3XgmXtEAba2iGikROddcKHPACC/exec",

  centralStorageEnabled: true,

  saveRetries: 3,
  retryDelayMs: 700,
  requestTimeoutMs: 9000,
  retryIntervalMs: 12000,

  localStorageKey: "forest_strength_test_records_v12",
  pendingStorageKey: "forest_strength_test_pending_v12"
});
