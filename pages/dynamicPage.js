import { withRouter } from "next/router";


const DynamicPage = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>{props.router.query.strapline}</p>
  </div>
));

export default DynamicPage;
