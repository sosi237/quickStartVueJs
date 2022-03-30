var BASE_URL = "/api"

export default {
    PAGESIZE: 5,
    // 전체 연락처 데이터 요청(페이징 포함)
    FETCH: BASE_URL + "/contacts",
    ADD: BASE_URL + "/contacts",
    UPDATE: BASE_URL + "/contacts/${no}",
    FETCH_ONE: BASE_URL + "/contacts/${no}",
    DELETE: BASE_URL + "/contacts/${no}",
    UPDATE_PHOTO: BASE_URL + "/contacts/${no}/photo"
}