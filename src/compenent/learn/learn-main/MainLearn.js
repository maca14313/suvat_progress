import React from 'react'
import './learn-main.css'


function MainLearn() {
  return (
    <div className='main-con'>

          <div className='main-con-nav'>

                 <div className='side-bar-toggle'>
                    <div></div>
                    <div></div>
                    <div></div>
                 </div>

                 <h3 className='learn-iner-page-title'>Learn Programing</h3>


          </div>

         <div class="scroll-block">
            <div class="categories-block">
                <a class="category-block" href="#d">
                    <span class="scroll-category">
                        <span class="scroll-category-text">rei</span>
                    </span>
                </a>

                <a class="category-block" href="#d">
                    <span class="scroll-category">
                        <span class="scroll-category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto blanditiis deleniti odio veniam dolores, dolorum laboriosam. Doloribus officia labore minima architecto ea ipsam in facere veritatis esse. Maxime, consectetur?</span>
                    </span>
                </a>

                <a class="category-block" href="#d">
                    <span class="scroll-category">
                        <span class="scroll-category-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, modi!</span>
                    </span>
                </a>

                <a class="category-block" href="#d">
                    <span class="scroll-category">
                        <span class="scroll-category-text">lorem</span>
                    </span>
                </a>

                <a class="category-block" href="#d">
                    <span class="scroll-category">
                        <span class="scroll-category-text">w</span>
                    </span>
                </a>
               
            </div>
        </div>


              {/***************************************************************************** */}


          <div className="introduction-con">
            
               <p className='introduction-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem ipsum dolorem laboriosam quod et necessitatibus repudiandae eveniet sit fugit exercitationem, suscipit aperiam repellat totam! Nam aliquid laborum iusto natus nemo dolorem corporis, atque consequatur. Commodi eum sit id ipsa fuga dolorum, sapiente praesentium facilis minima, corporis sed molestiae necessitatibus!</p>
          </div>

          {/***************************************************************************** */}

          <div className='main-con-posts'>

            <div className='main-con-post'>

             <div className='post-con-title'>
                <div className='post-title-text'> Dolor sit amet consectetur adipisicing elit. Accusantium voluptatem ipsum dolorem laboriosam quod et necessitatibus repudiandae eveniet sit fugit exercitationem, suscipit aperiam repellat totam! Nam aliquid laborum iusto natus nemo dolorem corporis, atque consequatur. Commodi eum sit id ipsa fuga dolorum, sapiente praesentium facilis minima, corporis sed molestiae necessitatibus!</div>
             </div>

            <div className='main-con-post-video-con'>

            <div className='main-con-post-video-link-con'>

<a className='main-con-post-video-link' href="https://www.youtube.com/embed/WuljKartv2U">watch on youtube</a>

</div>

<iframe  className='main-con-post-video' src="https://www.youtube.com/embed/WuljKartv2U"  allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" >

 </iframe>



  

</div>

<p className="main-con-post-text">
The World Wide Web (WWW), commonly known as the Web, is an information system enabling information to be shared over the Internet through simplified ways meant to appeal to users beyond IT specialists and hobbyists,[1] as well as documents and other web resources to be accessed over the Internet according to specific rules, the Hypertext Transfer Protocol
</p>

{/*
<object className="main-con-post-text" width="100%" height="650" type="application/pdf" data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf#zoom=85&scrollbar=0&toolbar=0&navpanes=0" id="pdf_content" >
        <p>Insert your error message here, if the PDF cannot be displayed.</p>
    </object> */}





<div className='gap'></div>

            </div>


            <div className='main-con-post'>


<div className='main-con-post-video-con'>

<div className='main-con-post-video-link-con'>

<a className='main-con-post-video-link' href="https://www.youtube.com/embed/WuljKartv2U">watch on youtube</a>

</div>

<iframe  className='main-con-post-video' src="https://www.youtube.com/embed/WuljKartv2U">
</iframe>



</div>

<div className="main-con-post-text">
Documents and downloadable media are made available to the network through web servers and can be accessed by programs such as web browsers. Servers and resources on the World Wide Web are identified and located through character strings called uniform resource locators (URLs). The original and still very common document type is a web page formatted in Hypertext Markup Language (HTML). This markup language supports plain text, images, embedded video and audio contents, and scripts (short programs) that implement complex user interaction. The HTML language also supports hyperlinks (embedded URLs) which provide immediate access to other web resources. Web navigation, or web surfing, is the common practice of following such hyperlinks across multiple websites. Web applications are web pages that function as application software. The information in the Web is transferred across the Internet using the Hypertext Transfer Protocol (HTTP).

Multiple web resources with a common theme and usually a common domain name make up a website. A single web server may provide multiple websites, while some websites, especially the most popular ones, may be provided by multiple servers. Website content is provided by a myriad of companies, organizations, government agencies, and individual users; and comprises an enormous amount of educational, entertainment, commercial, and government information.

The World Wide Web has become the world's dominant information systems platform.[3][4][5][6] It is the primary tool billions of people worldwide use to interact with the Internet.[7]

The Web was invented by Tim Berners-Lee at CERN in 1989 and opened to the public in 1991. It was conceived as a "universal linked information system".[8]
</div>


<div className='gap'></div>
</div>
            


            

          </div>




           




    </div>  
    
    )
}

export default MainLearn