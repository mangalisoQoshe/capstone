import Item from "./Item"


function AnnouncementList({announcements,deleteAnnouncement}) {
  return (
    <ul >
    {
        announcements.sort((a,b)=> b.id - a.id).map(item=>{
            return <Item key={item.id} 
            announcement={item} 
            deleteAnnouncement={deleteAnnouncement}/>         
        })
    }
   </ul>
  )
}

export default AnnouncementList