import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function profile() {
  const {id} = useParams();
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailgame(id))
    },[])
    const developer = useSelector((state) => state.user)
    const projects = useSelector((state) => state.projects)

  
  return(
    <div>
      <div>
        {developer.photo}
      </div>


      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", height:"85rem", paddingTop:"2rem"}}>
            {
                Object.keys(projects).length !== 0 
                ? projects.map((projects) =>{
                    return(
                        <Card
                        titulo={[projects.titulo]}
                        techs={projects.techs.map((el) => el.techs).join(' ') } 
                        fotos={projects.fotos[0]}
                        video={projects.video}
                        favorito={projects.favorito}
                        puntuacion={projects.puntuacion}                        
                        />
                    )
                }): <div className="cars">
                    <img src="https://cdn.dribbble.com/users/1253165/screenshots/3621577/media/0cc3e97033b3200c987b69b535ed3e64.gif" alt="loading"/>
                </div>
            }
      </div>
    </div>

  )
}