import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../../atoms/Icons/icons"; 
import { UserIcon } from "../../atoms/User Icon/UserIcon";
import { Button, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { AddIcon2 } from "../../atoms/Add Icon/AddIcon";
import { BookName } from "../../atoms/Text/BookName";
import { AuthorName } from "../../atoms/Text/Author";
import { ReadTime } from "../../atoms/Text/ReadingTime";
import { NumberofReads } from "../../atoms/Text/NumberOfReads";
import { IconButton } from "@mui/material";
//import { BookName1 } from "../../atoms/Text/text.stories";
import { PrimaryButtonActive } from "../../atoms/Button/index.stories";
import AddIcon from '@mui/icons-material/Add';
import { Card } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './molecule.css';

var addToLibrary = "Add to Library";
const BookPage = () => {

  return ( 
  <div className="div-default">
        <img src="book.png"></img><br></br>
        <BookName></BookName>
        <AuthorName></AuthorName>
        <Icons></Icons>
        <ReadTime></ReadTime>
        <UserIcon></UserIcon>
        <NumberofReads></NumberofReads><hr/>
        <IconButton aria-label="Add">
          <AddIcon className="icon-button"></AddIcon>
        </IconButton>
        <Button variant="text" className="button-text">{addToLibrary}</Button>
 </div>
    //<AddIcon2></AddIcon2>
  );
};


BookPage.defaultProps = {};

export default BookPage;
