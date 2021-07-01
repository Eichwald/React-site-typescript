import './App.css';
import React, { Fragment } from "react";
import { Tabs, Tab, Card } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { Post, Album } from './types/types';
import { Posts, Albums } from './hooks/use-queries';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

function App() {
  const allTabs = ['/', '/albums'];

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname} centered>
                <Tab label="Posts" value="/" component={Link} to={allTabs[0]} />
                <Tab label="Albums" value="/albums" component={Link} to={allTabs[1]} />
              </Tabs>
              <Switch>
                <Route path={allTabs[1]} component={AlbumsTab}/>
                <Route path={allTabs[0]} component={PostsTab}/>
              </Switch>
            </Fragment>
          )}
        />
        <div>
        </div>
      </div>
    </Router>
  );
}

function PostsTab() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
		Posts.getPosts()
			.then((data) => {
				setPosts(data);
			})
			.catch((err) => {
				setIsError(true);
			});
		return () => {};
	}, []);

  return  (
  <div>
    <div>
    {
        posts.slice(0,10).map(post => (
          <Card>
            <p key={post.id}>{post.id}</p>
            <p key={post.title}>{post.title}</p>
            <p key={post.body}>{post.body}</p>
          </Card>
        ))
    }
    </div>
</div>); 
}

function AlbumsTab() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
		Albums.getAlbums()
			.then((data) => {
				setAlbums(data);
			})
			.catch((err) => {
				setIsError(true);
			});
		return () => {};
	}, []);
  
  return  (
  <div>
    <div>
    {
        albums.slice(0,10).map(album => (
                <Card>
                    <p key={album.id}>{album.id}</p>
                    <p key ={album.title}>{album.title}</p>
                </Card>
        ))
    }
    </div>
</div>);
} 
export default App;

