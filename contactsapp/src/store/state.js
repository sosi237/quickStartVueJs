import CONF from '../Config';

export default {
    isloading: false,
    // 동적 컴포넌트 기능을 이용하여 화면은 전환하던 때와 달리 라우터 사용시 
    // currentView, mode 와 같은 상태 정보가 필요하지 않다.
    contact: { no: 0, name: '', tel: '', address: '', photo: '' },
    contactlist: {
        pageno: 1,
        pagesize: CONF.PAGESIZE,
        totalcount: 0,
        contacts: []
    }
}