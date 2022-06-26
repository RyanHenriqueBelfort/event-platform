import { useParams } from 'react-router-dom'
import { useGetLessonBySlugQuery } from '../graphql/generated'


export function useVideoId(){
  const {data} = useGetLessonBySlugQuery() 

  let videoId = data?.lesson?.videoId
  return{
    videoId
  } 
}
