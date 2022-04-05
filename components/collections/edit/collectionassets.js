import React, {useState} from 'react';
import Image from "next/image";
import Link from 'next/link';

import paging from '../../../public/collections/pagination.module.scss';
import classes from '../create/collectionassets.module.scss';

import {Button, Modal} from 'react-bootstrap';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faAngleRight, faSortAmountDown, faSearch, faArrows, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import User from '../../../public/collections/create/images/user.png';
import User2 from '../../../public/collections/create/images/user2.png';
import User3 from '../../../public/collections/create/images/user3.png';
import User4 from '../../../public/collections/create/images/user4.png';

import AssetImg from '../../../public/collections/create/images/assetimg.png';

const StepCollectionAssets = () => {
  const [modalShow, ModalSetShow] = useState(false);

  const handleClose = () => ModalSetShow(false);
  const handleShow = () => ModalSetShow(true);
  return (
    <>  
      <div className={`text-center`+ ' ' + classes.titleWrap}>
        <h1 className={classes.title}>Please select assets to add into your collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* <div className={`` + ' ' + classes.formGroup}>
        <h2>Collection Assets</h2>
        <p>All your NFT (0 Assets)</p>
      </div> */}

      <div className='text-right mb-3' style={{textAlign:"Right"}}>
        <Button variant="primary" onClick={handleShow}>
          Add Assert to collection
        </Button>
      </div>

      <div className='classes.collectionFilter'>
        <div className='row'>
     
          <div className={`col-md-4`+ ' ' + classes.formGroup + ' ' + classes.search}>
            <div className={classes.searchModal}>
              <button className='btn'><FontAwesomeIcon icon={faSearch} className={classes.faSearch} /></button>
              <input placeholder='Search... ' className={`w-100` + ' ' + classes.formControl} />
            </div>
          </div>
        
          <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className={classes.formControl} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}> <FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Channel <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={classes.formControl} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Contract <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={classes.formControl} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Sort by date  <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className={classes.tableWrapper}>
        <table className={`table` + ' '  + classes.table}>
          <thead>
            <tr>
              <th className={classes.dragTh}></th>
              <th className={classes.assetTh}>Asset</th>
              <th className={classes.chainnTh}>Chain</th>
              <th className={classes.orderTh}>Order</th>
              <th className={classes.deleteTh}>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className={`dragable` + ' ' + classes.dragItem}>
                  <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                </span>
                <div className={classes.selectUser}>
                  <input type="checkbox" />
                  <span className={classes.checkSku}>0xceB945...</span>
                </div>
              </td>
              <td>
                <div className={classes.tdProduct}>
                    <Link href="/"><a className={classes.name}>
                      <Image
                        src={User}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
                  BITKUB
              </td>
              <td>
                  <select className='form-control'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
              <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`dragable` + ' ' + classes.dragItem}>
                  <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                </span>
                <div className={classes.selectUser}>
                  <input type="checkbox" />
                  <span className={classes.checkSku}>0xceB945...</span>
                </div>
              </td>
              <td>
                <div className={classes.tdProduct}>
                  <Link href="/"><a className={classes.name}>
                      <Image
                        src={User2}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
              BIT
              </td>
              <td>
                  <select className='form-control'>
                    <option value={1}>1</option>
                    <option value={2} selected>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
              <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`dragable` + ' ' + classes.dragItem}>
                  <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                </span>
                <div className={classes.selectUser}>
                  <input type="checkbox" />
                  <span className={classes.checkSku}>0xceB945...</span>
                </div>
              </td>
              <td>
                <div className={classes.tdProduct}>
                    <Link href="/"><a className={classes.name}>
                      <Image
                        src={User3}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
                OPENSES
              </td>
              <td>
              <select className='form-control'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3} selected>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`dragable` + ' ' + classes.dragItem}>
                  <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                </span>
                <div className={classes.selectUser}>
                  <input type="checkbox" />
                  <span className={classes.checkSku}>0xceB945...</span>
                </div>
              </td>
              <td>
                <div className={classes.tdProduct}>
                <Link href="/"><a className={classes.name}>
                      <Image
                        src={User4}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
              Chain
              </td>
              <td>
                  <select className='form-control'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`dragable` + ' ' + classes.dragItem}>
                  <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                </span>
                <div className={classes.selectUser}>
                  <input type="checkbox" />
                  <span className={classes.checkSku}>0xceB945...</span>
                </div>
              </td>
              <td>
                <div className={classes.tdProduct}>
                    <Link href="/"><a className={classes.name}>
                      <Image
                        src={User}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
                  BITKUB
              </td>
              <td>
                  <select className='form-control'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
              <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`dragable` + ' ' + classes.dragItem}>
                  <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                </span>
                <div className={classes.selectUser}>
                  <input type="checkbox" />
                  <span className={classes.checkSku}>0xceB945...</span>
                </div>
              </td>
              <td>
                <div className={classes.tdProduct}>
                  <Link href="/"><a className={classes.name}>
                      <Image
                        src={User2}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
              BIT
              </td>
              <td>
                  <select className='form-control'>
                    <option value={1}>1</option>
                    <option value={2} selected>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`dragable` + ' ' + classes.dragItem}>
                  <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                </span>
                <div className={classes.selectUser}>
                  <input type="checkbox" />
                  <span className={classes.checkSku}>0xceB945...</span>
                </div>
              </td>
              <td>
                <div className={classes.tdProduct}>
                    <Link href="/"><a className={classes.name}>
                      <Image
                        src={User3}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
                OPENSES
              </td>
              <td>
              <select className='form-control'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3} selected>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`dragable` + ' ' + classes.dragItem}>
                  <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                </span>
                <div className={classes.selectUser}>
                  <input type="checkbox" />
                  <span className={classes.checkSku}>0xceB945...</span>
                </div>
              </td>
              <td>
                <div className={classes.tdProduct}>
                <Link href="/"><a className={classes.name}>
                      <Image
                        src={User4}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
              Chain
              </td>
              <td>
                  <select className='form-control'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={paging.totalPaging}>
        <div className={paging.total}>
          <select className='form-control'>
            <option>20</option>
            <option>40</option>
            <option>60</option>
            <option>80</option>
          </select>
          <span className={paging.totalLbl}>490 Assets</span>
        </div>
        <ul className={`pagination justify-content-end my-4`+ ' ' + paging.pagination}>
          <li className={`page-item` + ' ' + paging.disabled} ><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><span className="page-link"> .. </span></li>
          <li className="page-item"><a className="page-link" href="#">10</a></li>
          <li className="page-item"><a className="page-link" href="#">11</a></li>
          <li className="page-item"><a className={`page-link`+ ' ' + paging.active} href="#">12</a></li>
          <li className="page-item"><a className="page-link" href="#">16</a></li>
          <li className="page-item"><span className="page-link"> .. </span></li>
          <li className="page-item"><a className="page-link" href="#">26</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </div>

      <div className={classes.formGroup}>
        <div className='d-flex justify-content-between'>
          <a className='btn text-danger'><FontAwesomeIcon icon={faTrash} className={classes.faTrash} />  Delete this collection</a>
          
        </div>
      </div>

      <Modal show={modalShow} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className={classes.modalLg}>
        <Modal.Header closeButton style={{border:"none",paddingBottom:0}}>
        </Modal.Header>
        <Modal.Body>
          <div className={`text-center`+ ' ' + classes.titleWrap}>
            <h1 className={classes.title}>My assert</h1>
            <p>All assets from your connected Wallet will display here. </p>
          </div>

          <div className='classes.collectionFilter'>
            <div className='row'>
        
              <div className={`col-md-4`+ ' ' + classes.formGroup + ' ' + classes.search}>
                <div className={classes.searchModal}>
                  <button className='btn'><FontAwesomeIcon icon={faSearch} className={classes.faSearch} /></button>
                  <input placeholder='Search... ' className={`w-100` + ' ' + classes.formControl} />
                </div>
              </div>
            
              <div className='col-md-8'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className={classes.formControl} variant="primary">
                        <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}> <FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                        Channel <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                        </label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className={classes.formControl} variant="primary">
                        <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                        Contract <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                        </label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className={classes.formControl} variant="primary">
                        <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                        Sort by date  <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                        </label>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className='row px-3'>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem + ' ' + classes.active}>
                <div className={classes.checkitem}>
                  <input type="checkbox" checked/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className={paging.totalPaging}>
            <div className={paging.total}>
              <select className='form-control'>
                <option>20</option>
                <option>40</option>
                <option>60</option>
                <option>80</option>
              </select>
              <span className={paging.totalLbl}>490 Assets</span>
            </div>
            <ul className={`pagination justify-content-end my-4` + ' ' + paging.pagination}>
              <li className={`page-item`+ ' ' + paging.disabled} ><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><span className="page-link"> .. </span></li>
              <li className="page-item"><a className="page-link" href="#">10</a></li>
              <li className="page-item"><a className="page-link" href="#">11</a></li>
              <li className="page-item"><a className={`page-link`+ ' ' + paging.active} href="#">12</a></li>
              <li className="page-item"><a className="page-link" href="#">16</a></li>
              <li className="page-item"><span className="page-link"> .. </span></li>
              <li className="page-item"><a className="page-link" href="#">26</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </div>
          <div className={classes.assetBtnGroup}>
            <Button variant="default" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" className={classes.primaryBtn} onClick={handleClose} type="submit">
              Add Assert
            </Button>
          </div>
        </Modal.Body>

      </Modal>
        
    </>

    
  );
}

export default StepCollectionAssets;