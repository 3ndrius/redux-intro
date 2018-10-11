import React  from 'react';
import Rainbow from './hoc/Rainbow';

const About = () =>{
    return(
        <div className="row">
            <div className="col-md-12">

                <h2>About</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore laborum nulla explicabo a, voluptas voluptatem quod perferendis ex ipsum laudantium doloribus itaque incidunt fugiat molestiae odit qui, provident fugit. Ab.</p>
            </div>
        </div>
    )
}

export default Rainbow(About);