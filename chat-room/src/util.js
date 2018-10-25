//according to the type of user tp redirect to different page. e.g. boss/seeker

export function getRedirectPath({type, avatar}){
    
    let url = (type==='boss')?'/boss':'/seeker'

    //if user have avatar, we assume they already fill in personal information
    if(!avatar){
        url+='info'
    }
    
    return url
}