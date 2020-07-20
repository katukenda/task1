import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Post from '../../Components/Post/Post';
import Post2 from '../../Components/Post2/Post2';
import './Getdata.css';
import Nav from '../../Components/Nav/Nav';

class Getdata extends Component{

state ={
    posts: []
    
}



componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(responce => {
        const posts =responce.data.slice(0,12);
        
       
        const updatePosts = posts.map(post=>{
            return{
                ...post,   
            }
        })
      
      

        this.setState({posts: updatePosts});


    
        

       
        // console.log(responce);

    })
}




 

render(){

    const posts =this.state.posts.map(post =>{
        return <Post key ={post.id} id={post.id} name ={post.name} email={post.email} body={post.body}/>;
       
    })
   
   

return(
<div>
    <div>
    <Nav/>
    </div>
   <div>
       <card>
       <section className="Posts">
       {posts} 
       </section>
       </card>
      


      
       </div>
   <Link to="/showmore">Show More</Link>
   </div>
)
}

}




export default Getdata;
