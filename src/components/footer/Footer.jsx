import { Icon } from "@iconify/react"


function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer">
          <hr/>
          <div className="footerone">
            <div className="footertwo">
              <h4>Follow me on</h4>
              <div className="subfootertwo">
                <a href="https://www.facebook.com/profile.php?id=100009277052711">  <Icon icon="bi:facebook" width="24" height="24" /></a>
                <a href="https://www.instagram.com/dark_devil_joke/"> <Icon icon="line-md:instagram" width="24" height="24" /></a>
                <a href="https://github.com/Naveen-peace"> <Icon icon="codicon:github" width="24" height="24" /></a>
                <a href="https://www.linkedin.com/in/naveen-kumar-b6b1a6247/"> <Icon icon="line-md:linkedin" width="24" height="24" /></a>
              </div>
            </div>
            <div className="footerthree">
              <h4>Made by ❤️ Naveen Kumar</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer