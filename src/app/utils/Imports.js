import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import Check from '@mui/icons-material/Check';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Dialog from "@mui/material/Dialog";
import FolderIcon from "@mui/icons-material/Folder";
import { NavDropdown } from "react-bootstrap";
import Slide from "@mui/material/Slide";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Popover from '@mui/material/Popover';
import Collapse from "@mui/material/Collapse";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import FormGroup from "@mui/material/FormGroup";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LinearProgress from '@mui/material/LinearProgress';

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { withStyles, createStyles } from "@material-ui/core";
import Badge from "@mui/material/Badge";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@material-ui/core/NativeSelect";
import CloseIcon from "@mui/icons-material/Close";
// import { apiGetRequest, apiPostRequest } from "./utils/Service";
import MuiAppBar from "@mui/material/AppBar";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Modal from "@mui/material/Modal";

import Menu from "@mui/material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Drawer from "@mui/material/Drawer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BottomNavigation from "@mui/material/BottomNavigation";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormLabel from "@mui/material/FormLabel";
import MuiGrid from "@mui/material/Grid";
// import { cryptoDecryption, cryptoEncryption } from "./utils/Global";
import InputLabel from "@mui/material/InputLabel";
import EditIcon from '@mui/icons-material/Edit';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Popper from '@mui/material/Popper';

import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Slider from '@mui/material/Slider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CardActions from '@mui/material/CardActions';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import MuiAccordionDetails from '@mui/material/AccordionDetails';

export {
  Avatar,
  ArrowForwardIosSharpIcon,
  Rating,
  MuiAccordionDetails,
  Pagination,
  StarIcon,
  ArrowBackIcon,
  PaginationItem,
  ArrowForwardIcon,
  CardActions,
  BsGlobeCentralSouthAsia,
  Stack,
  Accordion,
  AccordionSummary,
  Person4OutlinedIcon,
  AccordionDetails,
  ShieldOutlinedIcon,
  AutoStoriesOutlinedIcon,
  Slider,
  CloseIcon,
  EditIcon,
  CancelIcon,
  CheckCircleIcon,
  NativeSelect,
  Check,
  Popover,
  ProgressBar,
  AppBar,
  Box,
  Toolbar,  
  IconButton,
  Typography,
  InputBase,
  MenuIcon,
  SearchIcon,
  styled,
  alpha,
  Grid,
  TextField,
  Divider,
  FormControl,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  Button,
  FormLabel,
  Chip,
  VisibilityIcon,
  VisibilityOffIcon,
  Grow,
  Backdrop,
  Dialog,
  FolderIcon,
  NavDropdown,
  Tabs,
  Tab,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ArrowForwardIosIcon,
  tableCellClasses,
  Slide,
  Radio,
  RadioGroup,
  Modal,
  FormControlLabel,
  ExpandLessIcon,
  ExpandMoreIcon,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardHeader,
  FormGroup,
  RadioButtonUncheckedIcon,
  CheckCircleOutlineIcon,
  AttachMoneyIcon,
  Badge,
  CheckIcon,
  Select,
  MenuItem,
  axios,
  Fade,
  MuiAppBar,
  PersonIcon,
  LockIcon,
  AccountCircleIcon,
  Menu,
  MoreHorizIcon,
  LogoutIcon,
  MoreVertIcon,
  PowerSettingsNewIcon,
  Drawer,
  Breadcrumbs,
  ArrowBackIosNewIcon,
  BottomNavigation,
  ZoomOutMapIcon,
  CancelRoundedIcon,
  // apiGetRequest,
  // apiPostRequest,
  MuiGrid,
  withStyles,
  createStyles,
  // cryptoDecryption,
  // cryptoEncryption,
  InputLabel,
  LinearProgress,
  Collapse,
  Popper
};
