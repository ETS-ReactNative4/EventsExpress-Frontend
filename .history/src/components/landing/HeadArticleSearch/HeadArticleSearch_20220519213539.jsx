import React from "react";
import { reduxForm, Field } from "redux-form";
import propTypes from "prop-types";
import "./HeadArticleSearch.scss";
import { Search } from "@material-ui/icons";
import PLACEHOLDER_INPUT from "../../../constants/HeadArticleSearchConstants";

const HeadArticleSearchWithoutForm = ({ handleSubmit }) => {
  return (
    <div className="HeadArticleSearchWrapper">
      <form className="HeadArticleSearchForm" onSubmit={handleSubmit}>
        <Search className="search__icon" fontSize={36} />
        <Field
          name="search"
          component="input"
          type="text"
          placeholder={PLACEHOLDER_INPUT}
          className="HeadArticleSearchInput"
        />
      </form>
    </div>
  );
};

HeadArticleSearchWithoutForm.defaultProps = {
  handleSubmit: () => {},
};

HeadArticleSearchWithoutForm.propTypes = {
  handleSubmit: propTypes.func,
};

const HeadArticleSearch = reduxForm({
  form: "head-article-search-form",
})(HeadArticleSearchWithoutForm);

export default HeadArticleSearch;
