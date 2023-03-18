import Project from './Project'
import './Project.css'

const ProjectsContainer = () => {

  return (
    <section id='projects'>
        <h2 className='titles' data-aos="zoom-in">Projects</h2>
        <div>
          <Project img={'https://res.cloudinary.com/tuko/image/upload/v1678645206/portfolio/lamatita_ey01hy.png'} desc={'Project for a bookshop. Allows you to create and edit articles and contact by WhatsApp.'}/>
          <Project img={'https://res.cloudinary.com/tuko/image/upload/v1678645314/portfolio/importados_ldbyo5.png'} desc={'Project carried out for a venture dedicated to selling perfumes. It allows you to add, edit and delete products and contact by whatsapp.'}/>
          <Project img={'https://res.cloudinary.com/tuko/image/upload/v1664367426/portfolio/SkateShop_osd7cc.png'} desc={'This was a final test for a course I did in CoderHouse. Its an eCommerce created with React and Firebase.'} link={'https://skateshop-seven.vercel.app/'}/>
        </div>
    </section>
  )
}

export default ProjectsContainer