import Sidebar from './Sidebar'

export default function Layout(props) {
    const { children } = props
    return (
        <div style={{display:"flex",width:"100%"}}>
           <div><Sidebar/></div> 
          <div style={{marginLeft:"10px",width:"100%"}}>  {children}</div>
        </div>
    )
}