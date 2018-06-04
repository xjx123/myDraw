export default {
    addRoomList(state, data) {
        if (data.length > 0) {
            let roomIds = state.roomList.map(x => x.id);
            data = data.filter(x => roomIds.indexOf(x.id) === -1);
            state.roomList.push(...data);
        } else {
            state.roomList.push(data);
        }
    }
}