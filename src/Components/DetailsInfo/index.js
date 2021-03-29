import styles from './index.module.css';

const DetailsInfo = ({ info }) => {
  return (
    <div className={ styles.infoWrapper } id="infoWrapper">
      <h1 className={ styles.title }>{ info.title }</h1>
      <div className={ styles.details }>
        <div className={ styles.dWrapper }>
          <h5 className={ styles.detailsText }>Material: </h5>
          <span className={ styles.span }>{ info.material }</span>
        </div>
        <div className={ styles.dWrapper }>
          <h5 className={ styles.detailsText }>Mediums:</h5>
          <span className={ styles.span }>{ info.mediums }</span>
        </div>

        <div className={ styles.dWrapper }>
          <h5 className={ styles.detailsText }>Subject:</h5>
          <span className={ styles.span }>{ info.subject }</span>
        </div>
        <div className={ styles.dWrapper }>
          <h5 className={ styles.detailsText }>Size:</h5>{ " " }
          <span className={ styles.span }>{ info.length } cm x { info.width } cm x { info.depth } cm</span>
        </div>
      </div>
      <div className={ styles.description }>
        <h2 className={ styles.h2 }>Description</h2>
        <p className={ styles.p }>
          { info.description }
        </p>
      </div>
    </div>
  );
}

export default DetailsInfo;