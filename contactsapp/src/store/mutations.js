import Constant from '../Constant';

// 상태를 변경하는 기능만을 뽑아서...
// 상태를 변경하는 작업만 변이로 등록
// 등록/수정은 axios를 통한 외부 API를 요청한 후 수신한 데이터를 FETCH_CONTACTS 변이를 통해 업데이트만 하면 되므로 필요 없음
export default {
    [Constant.FETCH_CONTACTS]: (state, payload) => {
        state.contactlist = payload.contactlist;
    },
    [Constant.FETCH_CONTACT_ONE]: (state, payload) => {
        state.contact = payload.contact;
    },
    [Constant.INITIALIZE_CONTACT_ONE]: (state) => {
        state.contact = { no: "", name: "", tel: "", address: "", photo: "", };
    },
}