export default function Navbar(){

    const navStyle= {
        display: "flex",
        textalign: "right",
        justifyContent:"flex-end",
        marginRight:"150px",
    }
    const liStyle ={
            display:"flex",
            flexwrap: "wrap",
            justifyContent:"space-between",
            width:"50%",
            padding:"5px 10px",
            backgroundcolor:"red",
            border:"1px solid #000",
            textalign:"center",
            color:"#000",
            listStyle: 'none',
            "& hover":{
            backgroundcolor:"black",
            },
    }
    return (
        <header className="header">
                <div className="logo">
                    logo
                </div>  
        <div className="nav"style={navStyle} >
            <ul className="links" style={liStyle} >
                <li>Nosotros</li>
                <li>Productos</li>
                <li>Contacto</li>  
            </ul>
        </div>
    </header>
    );
}