export default function modifyImgUrl(imgUrl) {
  let arr = imgUrl.split("upload/");
  return arr[0] + "upload/f_auto/" + arr[1];
}
