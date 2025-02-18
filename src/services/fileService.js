const uploadSingleFile = async (fileObject) => {

    let uploadPath = __dirname + fileObject.name;

    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }
    } catch (error) {
        console.log(">>> check err: ", err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }

    }

}
const uploadMultipleFiles = (fileObject) => {

}
module.exports = {
    uploadSingleFile, uploadMultipleFiles
}