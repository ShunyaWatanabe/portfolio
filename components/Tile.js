import Button from 'components/Button';

export default (props) => {
  const { src, title, description } = props;
  return (
    <div className="project-tile">
      <img src={src}/>
      <div className="project-tile-content-container">
        <div className="project-tile-content">
          <h5> {title} </h5>
          <p> {description} </p>
          <Button isPrimary	>View</Button>
        </div>
      </div>
    </div>
  )
}