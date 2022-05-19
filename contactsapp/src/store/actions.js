import Constant from '../Constant';
import axios from 'axios';
import CONF from '../Config'

// 라우터 사용에 따라 더이상 화면전환엔 상태가 필요하지 않으므로 일부 메소드 삭제
export default {
    [Constant.FETCH_CONTACTS]: (store, payload) => {
        var pageno;
        if (typeof payload === "undefined" || typeof payload.pageno === "undefined")
            pageno = 1;
        else
            pageno = payload.pageno;
        var pagesize = store.state.contactlist.pagesize;

        axios.get(CONF.FETCH, {
            params: { pageno: pageno, pagesize: pagesize }
        }).then((response) => {
            store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
        })
    },
    [Constant.ADD_CONTACT]: (store) => {
        axios.post(CONF.ADD, store.state.contact)
            .then((response) => {
                if (response.data.status == "success") {
                    // 등록 성공시 다시 연락처 조회 액션을 호출하여 목록을 조회하고 상태를 변경시킨다.
                    // 따라서 변이를 일으키는 코드(store.commit())가 존재하지 않는다.
                    store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
                } else {
                    console.log("연락처 추가 실패 : " + response.data);
                }
            })
    },
    [Constant.UPDATE_CONTACT]: (store) => {
        var currentPageNo = store.state.contactlist.pageno;
        var contact = store.state.contact;
        axios.put(CONF.UPDATE.replace("${no}", contact.no), contact)
            .then((response) => {
                if (response.data.status == "success") {
                    store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
                } else {
                    console.log("연락처 변경 실패 : " + response.data)
                }
            })
    },
    [Constant.UPDATE_PHOTO]: (store, payload) => {
        var currentPageNo = store.state.contactlist.pageno;
        var data = new FormData();
        data.append('photo', payload.file);
        axios.post(CONF.UPDATE_PHOTO.replace("${no}", payload.no), data)
            .then(() => {
                store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
            })
    },
    [Constant.DELETE_CONTACT]: (store, payload) => {
        var currentPageNo = store.state.contactlist.pageno;
        axios.delete(CONF.DELETE.replace("${no}", payload.no))
            .then(() => {
                store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
            })
    },
    [Constant.FETCH_CONTACT_ONE]: (store, payload) => {
        axios.get(CONF.FETCH_ONE.replace("${no}", payload.no))
            .then((response) => {
                store.dispatch(Constant.FETCH_CONTACT_ONE, { contact: response.data });
            })
    },
    [Constant.INITIALIZE_CONTACT_ONE]: (store) => {
        store.commit(Constant.INITIALIZE_CONTACT_ONE)
    },
}