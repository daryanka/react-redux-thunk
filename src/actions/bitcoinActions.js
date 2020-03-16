import axios from "axios";
import moment from "moment";

export const getData = ({ time, number }) => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_BITCOIN"
    })

    const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD`)

    const labels = [];
    const data = [];
    for (let i = 0; i < response.data.length; i++) {
      data.unshift(response.data[i].close)
      labels.unshift(moment(response.data[i].date).format("LT"))

      if (i === (number - 1)) {
        break;
      }
    }

    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
        data,
        labels
      }
    })
  } catch (e) {
    dispatch({
      type: "REJECTED_BITCOIN",
    })
  }
}
