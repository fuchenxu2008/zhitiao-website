export default function AppReducer(state, action) {
  switch (action.type) {
    case 'WINDOW_RESIZE':
      return {
        ...state,
        deviceWidth: 0.92 * window.innerHeight * 0.85 * 0.5 * 0.868,
        deviceHeight: 0.92 * window.innerHeight * 0.85 * 0.94
      };
    case 'GENERATE_QRCODE':
      return {
        ...state,
        qrcodeUrl: `https://apis.xjtluwall.com/wechat/generate/qrcode?&page=pages/index/index&scene=${action.payload}`
      };
    case 'CLEAR_QRCODE':
      return {
        ...state,
        qrcodeUrl: ''
      };
    default:
      return state;
  }
}
