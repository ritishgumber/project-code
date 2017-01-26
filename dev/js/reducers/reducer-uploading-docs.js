export default function(state = {
    uploadedFiles: [],
    file: null,
    uploadProgress: 0
}, action) {
    console.log(action);
    switch (action.type) {

        case 'UPLOAD_PROGRESS':
            return {
                ...state,
                uploadProgress: action.payload.uploadProgress,
                file: action.payload.file
            }
        case 'FILES_UPLOADED':
            return {
                ...state,
                uploadedFiles: action.payload,
                file: null
            }

    }
    return state;

}
