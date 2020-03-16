const initalState = {
  loading: false,
  data: {
    labels: [],
    datasets: [{
      label: "BTC",
      data: [],
      backgroundColor: 'rgba(238,175,0, 0.4)',
      borderColor: 'rgba(238,175,0, 0.5)',
      pointBorderColor: 'rgba(238,175,0, 0.7)'
    }]
  }
};

const bitcoinReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_BITCOIN":
      return {
        ...state,
        loading: true
      }
    case "REJECTED_BITCOIN":
      return {
        ...state,
        loading: false,
      }
    case "SUCCESS_BITCOIN":
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [{
            label: "BTC",
            data: payload.data,
            backgroundColor: 'rgba(238,175,0, 0.4)',
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)'
          }]
        }
      }
    default:
      return state;
  }
  return state;
}

export default bitcoinReducer;
