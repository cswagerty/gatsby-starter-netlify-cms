import React from "react";
import PropTypes from "prop-types";
import { JobsPageTemplate } from "../../templates/jobs-page";

const JobsPagePreview = ({ entry, widgetFor }) => (
  <JobsPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

JobsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default JobsPagePreview;
