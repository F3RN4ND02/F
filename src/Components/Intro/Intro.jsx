import './intro.css'

const Intro
 = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>
                        Hello, My name is
                    </h2>
                    <h1 className='i-name'>
                        Fernando Martinez
                    </h1>
                    <div className='i-title'>
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">API developer</div>
                            <div className="i-title-item">Support Engineer</div>
                            <div className="i-title-item">Content creator</div>
                            <div className="i-title-item">AI developer</div>
                        </div>
                    </div> 
                    <div className="i-desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam excepturi saepe, neque velit est ex pariatur similique nihil maiores necessitatibus ipsum itaque aliquam accusantium exercitationem consequuntur aliquid minus facere deleniti.
                        </div>
                </div>
            </div>
            <div className='i-right'></div>
            
        </div>
    )
}

export default Intro

