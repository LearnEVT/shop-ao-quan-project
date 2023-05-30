import moment from "moment";

export function getToday(){
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const date2 = new Date().toLocaleTimeString();
    const newdate = day + "-" + month + "-" + year + " " + date2;
    return newdate
}
     export  function reverses(array){
        return array.map((item,idx) => array[array.length-1-idx])
      }
export const getNow = () => ({
  startDate : moment().startOf('month').format("YYYY-MM-DD") ,
  endDate : moment().endOf('month').format("YYYY-MM-DD") 
})

export function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}


    export const StringToSlug = (str) => {
      const result = removeAccents(str)
      return result.replaceAll(" ",'-')
    }
    