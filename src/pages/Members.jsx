import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";
import Ryhie from '../assets/rihye.png'
import Phoenix from '../assets/phoinix.png'
import Lana from "../assets/lana.png"
import Demi from "../assets/demi.png"
import Candice from "../assets/candice.png"
import Natalia from "../assets/natalia.png"
import Drew from "../assets/draw.png"
import Orlandio from "../assets/orlado.png"
import Andi from "../assets/andi.png"
import Kate from "../assets/kate.png"
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Marketing from "../assets/marketing.png"
import { MdArrowOutward } from "react-icons/md";
import { IoRefreshSharp } from "react-icons/io5";
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  diaLogMain: {
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
    }
  },
  some: {
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: "0 !important"
    }
  },
}));

const data = [
  {
    name: "Olivia Rhye",
    username: "@olivia",
    src: Ryhie,
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Phoenix Baker",
    username: "@phoenix",
    src: Phoenix,
    status: "Active",
    role: "Product Manager",
    email: "phoenix@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Lana Steiner",
    username: "@lana",
    src: Lana,
    status: "Active",
    role: "Frontend Developer",
    email: "lana@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Demi Wilkinson",
    username: "@demi",
    src: Demi,
    status: "Active",
    role: "Backend Developer",
    email: "demi@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Candice Wu",
    username: "@candice",
    src: Candice,
    status: "Active",
    role: "Fullstack Developer",
    email: "candice@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Natali Craig",
    username: "@natali",
    src: Natalia,
    status: "Active",
    role: "UX Designer",
    email: "natali@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Drew Cano",
    username: "@drew",
    src: Drew,
    status: "Active",
    role: "UX Copywriter",
    email: "drew@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Orlando Diggs",
    username: "@orlando",
    src: Orlandio,
    status: "Active",
    role: "UI Designer",
    email: "orlando@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Andi Lane",
    username: "@andi",
    src: Andi,
    status: "Active",
    role: "Product Manager ",
    email: "andi@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
  {
    name: "Kate Morrison",
    username: "@kate",
    src: Kate,
    status: "Active",
    role: "QA Engineer",
    email: "kate@untitledui.com",
    tags: [
      { text: "Design", className: "border-[#e9d7fe] bg-[#f9f5ff] text-[#6941c6]" },
      { text: "Product", className: "border-[#b2ddff] bg-[#eff8ff] text-[#175cd3]" },
      { text: "Marketing", className: "border-[#c7d7fe] bg-[#eef4ff] text-[#3538cd]" },
      { text: "+4", className: "border-black bg-transparent text-black" },
    ],
  },
];
const roles = [
  'Product Designer',
  'Product Manager',
  'Frontend Developer',
  'Backend Developer'
];
const categories = [
  'Design',
  'Product',
  'Marketing',
  'Technology'
];
const userDetails = [
  { label: 'Date of Birth', value: '29-04-2005' },
  { label: 'Gender', value: 'Female' },
  { label: 'Nationality', value: 'Canadian' },
  { label: 'Contact no.', value: '1234567890' },
  { label: 'E-mail Address', value: 'Oliviadesign@gmail.com' },
  { label: 'Work email Address', value: 'Oliviadesign@gmail.com' },
];
const Members = () => {
  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState({ field: '', direction: '' });
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openMarket, setOpenMarket] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleClickOpenMarket = () => {
    setOpenMarket(true);
  };

  const handleCloseDialogMarket = () => {
    setOpenMarket(false);
  };
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSort = (field) => {
    let direction = 'asc';
    if (sortOrder.field === field && sortOrder.direction === 'asc') {
      direction = 'desc';
    }

    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
    setSortOrder({ field, direction });
  };
  return (
    <div className='p-[20px] pl-[0px]'>
      <div className='p-[15px] rounded-medium bg-white shadow-xl'>
        <div className='flex justify-between items-center flex-wrap gap-[10px]'>
          <div className='flex gap-[10px] items-center'>
            <p className='font-semibold md:font-bold'>Team members</p>
            <button className='border-[1px] rounded-xl bg-[#E4E7EC] border-[rgba(0,0,0,0.1)] text-xs pl-[8px] md:pl-[10px] pr-[8px] md:pr-[10px] pt-[3px] pb-[3px] text-[#6941C6]'>100 users</button>
          </div>
          <div className='flex gap-[10px] items-center flex-wrap max-w-[400px] w-[100%]'>
            <div className='max-w-[200px] w-[95%] bg-[rgba(255,252,252,1)] outline-none p-[10px] pt-[5px] pb-[5px] flex justify-between items-center border-[1px] border-[rgba(0,0,0,0.1)]'>
              <input type="text" className='bg-transparent outline-none text-md max-w-[110px]' placeholder='Search' />
              <IoIosSearch />
            </div>
            <CiFilter aria-describedby={id} variant="contained" color="primary" onClick={handleClick} />
            <button className='p-[15px] bg-[#6941C6] pt-[5px] pb-[5px] font-semibold text-white rounded-md'>+ ADD MEMBERS</button>
          </div>
        </div>
        <div className="w-full overflow-scroll lg:overflow-hidden">
          <table className="w-full mt-[15px]">
            <thead className='h-[35px] border-t-[1px] border-b-[1px]'>
              <tr>
                <th className={'text-left font-semibold text-[#475467] cursor-pointer'} onClick={() => handleSort('name')}> <div className='flex gap-[10px] items-center'>Name <IoIosArrowRoundDown className="ml-2" /></div></th>
                <th className='text-left font-semibold text-[#475467] cursor-pointer' onClick={() => handleSort('status')}><div className='flex gap-[10px] items-center'>Status <IoIosArrowRoundDown className="ml-2" /></div></th>
                <th className='text-left font-semibold text-[#475467]'>Role</th>
                <th className='text-left font-semibold text-[#475467]'>Email address</th>
                <th className='text-left font-semibold text-[#475467]'>Terms</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item, index) => (
                <tr key={index} className={index % 2 ? "border-b-[1px]" : "border-b-[1px] bg-[#F9FAFB]"}>
                  <td className="text-left overflow-hidden text-ellipsis whitespace-nowrap p-[10px] pl-[5px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={item.src} alt="" />
                      <div>
                        <p className="font-semibold sm:font-bold text-sm sm:text-lg">{item.name}</p>
                        <p className="text-xs">{item.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-left overflow-hidden text-ellipsis whitespace-nowrap p-[10px] pl-[5px]">
                    <button className="border-[2px] rounded-md font-semibold pt-[2px] pb-[2px] p-[15px]">
                      {item.status}
                    </button>
                  </td>
                  <td className="text-left overflow-hidden text-ellipsis whitespace-nowrap p-[10px] pl-[5px] text-sm sm:text-lg">
                    {item.role}
                  </td>
                  <td className="text-left overflow-hidden text-ellipsis whitespace-nowrap p-[10px] pl-[5px] text-sm sm:text-lg">
                    {item.email}
                  </td>
                  <td className="text-left overflow-hidden text-ellipsis whitespace-nowrap p-[10px] pl-[5px]">
                    <div className="flex gap-[5px]">
                      {item.tags.map((tag, tagIndex) => (
                        <button
                          key={tagIndex}
                          className={`rounded-xl pl-[15px] pr-[15px] p-[2px] text-xs border-[1px] font-bold ${tag.className}`}
                          onClick={handleClickOpenMarket}
                        >
                          {tag.text}
                        </button>
                      ))}
                      <div className="ml-[20px] flex gap-[10px]">
                        <RiDeleteBinLine className='cursor-pointer' onClick={handleClickOpen} />
                        <MdOutlineEdit className='cursor-pointer' onClick={handleClickOpenEdit} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className='p-[15px] border-b-[1px]'>
          <p>Filters</p>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label="Roles"
            />
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {roles.map((role, index) => (
                <li key={index}>
                  <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<Checkbox />}
                    style={{ padding: "0", paddingLeft: "50px" }}
                    label={role}
                  />
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions2-content"
            id="additional-actions2-header"
            style={{ margin: "0 !important" }}
            className={classes.some}
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label="Terms"
            />
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<Checkbox />}
                    style={{ padding: "0", paddingLeft: "50px" }}
                    label={category}
                  />
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <div className='p-[15px] border-b-[1px] bg-[#6941C6]'>
          <p className='font-bold text-white text-center uppercase tracking-[2px]'>SELECT</p>
        </div>
      </Popover>
      <Dialog
        open={openDialog}
        keepMounted
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" >
          <p className='font-bold'>Delete Member Details</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this Member details? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleCloseDialog} className='bg-[#6941C6] uppercase text-white font-bold rounded-md p-[20px] pt-[8px] pb-[8px]'>
            Delete
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openMarket}
        keepMounted
        onClose={handleCloseDialogMarket}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.diaLogMain}
      >
        <div className='p-[20px] bg-[#2A5B7E] flex gap-[20px] flex-wrap'>
          <div>
            <img src={Marketing} className='w-full max-w-[100px]' alt="" />
          </div>
          <div>
            <p className='font-bold text-white text-xl mb-[10px]'>Olivia Rhye</p>
            <div className='flex'>
              <div className='pr-[10px] border-r-[1px] border-r-white'>
                <p className='text-white font-light text-md'>@olivia</p>
                <p className='text-white font-semibold text-md'>User ID</p>
              </div>
              <div className='pl-[10px]'>
                <p className='text-white font-light text-md'>Product Designer</p>
                <p className='text-white font-semibold text-md'>Role</p>
              </div>
            </div>
          </div>
        </div>
        <div className='p-[15px] border-[1px] border-[#CBD5E1]'>
          <div className='p-[15px] pt-[5px] pb-[5px] bg-[#EFF5FA] rounded-md mb-[15px]'>
            <p className='text-[#334155] font-semibold text-md md:text-lg'>Personal Information</p>
          </div>
          {userDetails.map((detail, index) => (
            <div
              key={index}
              className="border-b-[1px] pt-[10px] pb-[10px] flex gap-[30px] md:gap-[50px] overflow-scroll md:overflow-hidden"
            >
              <p className="text-[#101828] font-bold text-sm md:text-md max-w-[100px] md:max-w-[150px] w-full">
                {detail.label}
              </p>
              <p className="text-[#64748B] font-semibold text-sm md:text-md">
                {detail.value}
              </p>
            </div>
          ))}
          <div className='p-[15px] pt-[5px] pb-[5px] bg-[#EFF5FA] rounded-md mb-[15px] mt-[15px]'>
            <p className='text-[#334155] font-semibold text-md md:text-lg'>Research & Publication</p>
          </div>
          <div className='mt-[20px] mb-[20px]'>
            <p className='text-md text-[#101828] font-semibold '>AI and User Experience: The Future of Design</p>
            <p className='mt-[10px] mb-[10px] text-sm text-[#475569]'>Published in the Journal of Modern Design • 2022</p>
            <p className='text-sm text-[#334155]'>AI, IoT based real time condition monitoring of Electrical Machines using Python language Abstract: Maintaining induction motors in good working order before they fail benefits small <span className='text-[#F15A22]'>See More...</span></p>
          </div>
          <div>
            <p className='text-lg text-[#F15A22] font-semibold flex gap-[10px] items-center border-b-[1px] pb-[15px]'><MdArrowOutward /> See publication</p>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={openEdit}
        keepMounted
        onClose={handleCloseEdit}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.diaLogMain}
      >
        <DialogTitle id="alert-dialog-slide-title" >
          <p className='font-bold'>Edit Profile</p>
        </DialogTitle>
        <div>
          <div className='flex items-center justify-center mt-[30px]'>
            <img src={Marketing} alt="" />
          </div>
          <div className='flex flex-col gap-[15px] p-[20px]'>
            <div className='flex justify-center items-center gap-[10px] flex-col sm:flex-row'>
              <div className='p-[5px] pl-[15px] pr-[15px] text-md font-semibold flex items-center gap-[10px] rounded-md border-[1px] border-[#CBD5E1] bg-[#F8FAFC]'>
                <IoRefreshSharp className='font-semibold text-2xl' />
                <p className='text-md font-bold text-[#06103C] uppercase '>change photo</p>
              </div>
              <div className='p-[5px] pl-[15px] pr-[15px] text-md font-semibold flex items-center gap-[10px] rounded-md border-[1px] border-[#CBD5E1] bg-[#F8FAFC]'>
                <RiDeleteBinLine className='font-semibold text-2xl' />
                <p className='text-md font-bold text-[#06103C] uppercase '>Remove photo</p>
              </div>
            </div>
            <div>
              <Grid container spacing={4}>
                <Grid item md={6} sm={6} xs={12}>
                  <div>
                    <p className='pb-[5px] text-md font-bold'>Name</p>
                    <input type="text" placeholder='Enter name' className='w-full outline-none rounded-md border-[1px] p-[7px]' />
                  </div>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <div>
                    <p className='pb-[5px] text-md font-bold'>Email</p>
                    <input type="email" placeholder='abcd@gmail.com' className='w-full outline-none rounded-md border-[1px] p-[7px]' />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={4}>
                <Grid item md={6} sm={6} xs={12}>
                  <div>
                    <p className='pb-[5px] text-md font-bold'>Role</p>
                    <select name="" id="" className='w-full p-[7px] outline-none border-[1px] rounded-md'>
                      <option className='p-[5px]'>Product Designer</option>
                      <option className='p-[5px]'>Product Manager</option>
                      <option className='p-[5px]'>Frontend Developer</option>
                      <option className='p-[5px]'>Backend Developer</option>
                    </select>
                  </div>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <div>
                    <p className='pb-[5px] text-md font-bold'>Status</p>
                    <select name="" id="" className='w-full p-[7px] outline-none border-[1px] rounded-md'>
                      <option className='p-[5px]'>Active</option>
                      <option className='p-[5px]'>Inactive</option>
                    </select>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <div>
                    <p className='pb-[5px] text-md font-bold'>Terms</p>
                    <select name="" id="" className='w-full p-[7px] outline-none border-[1px] rounded-md'>
                      <option className='p-[5px]'>Design</option>
                      <option className='p-[5px]'>Product</option>
                      <option className='p-[5px]'>Finance</option>
                      <option className='p-[5px]'>Marketing</option>
                    </select>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className='flex gap-[15px] justify-end items-center'>
              <button className='uppercase p-[8px] pl-[20px] pr-[20px] rounded-md border-[1px] border-[#CBD5E1] bg-[#F8FAFC] hover:bg-[#6941C6] font-bold text-md text-[#6941C6] hover:text-white' onClick={handleCloseEdit}>cancel</button>
              <button className='uppercase p-[8px] pl-[20px] pr-[20px] rounded-md border-[1px] border-[#CBD5E1] bg-[#F8FAFC] hover:bg-[#6941C6] font-bold text-md text-[#6941C6] hover:text-white' onClick={handleCloseEdit}>save</button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
export default Members