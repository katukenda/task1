import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Post2 from '../../Components/Post2/Post2';
import './Showmore.css';


class Showmore extends Component{

state ={
    posts2: []
}



componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(responce => {
        
        const posts2 =responce.data.slice(13,25);
        const updatePosts2 = posts2.map(post=>{
            return{
                ...post,  
            }
        })
     
    this.setState({posts2: updatePosts2})

        // console.log(responce);

    })
}




 

render(){
    const posts2 =this.state.posts2.map(post =>{
        return <Post2 key ={post.id} id={post.id} name ={post.name} email={post.email} body={post.body}/>;
       
    });
   

return(
<div>
   
   <div>
      
       <card>
       <section className="Posts2">
       {posts2} 
       </section>
       </card>

       </div>
   <Link to ="/getdata"><button>Back</button></Link>
   </div>
)


}
}

export default Showmore;
