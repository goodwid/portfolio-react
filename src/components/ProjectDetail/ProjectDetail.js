import React, { Component } from 'react';
import styles from './ProjectDetail.css';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import Slideshow from '../Slideshow';

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script'
});

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { project } = this.props;
    const { name, repo, url, description, images } = project;
    
    return (
      <div className={styles.projectDetail}>
        <h2>{name}</h2>
        <Slideshow images={images} />
        <h4><a href={url}>Link to demo</a></h4>
        <h5><a href={repo}>View on github.</a></h5>
        <ReactMarkdown source={description} astPlugins={[parseHtml]} />
      </div>
    );
  }
}
