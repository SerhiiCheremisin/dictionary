export const baseURL: string  = 'http://localhost:5000';


export const getData = async(url:string):Promise<any> => {
  try{
   const request = await fetch(`${baseURL}/${url}`);
   const respond = await request.json();
   return respond
  }
  catch (error) {
    console.log(error)
  }
}

export const dataSender = async(body:object, url: string):Promise<any> => {
  try {
   const request = fetch(`http://localhost:5000/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
   })  
  } catch (error) {
    console.log(error)
  }
}
