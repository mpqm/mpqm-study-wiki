import { useSelector } from 'react-redux';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  DataGrid, GridColDef, GridRowProps, GridCellParams, GridFilterOperator,
} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { RootState } from '../../redux/store';

const AllOrder = () => {
  const { isAuthenticated, userData } = useSelector(
    (state: RootState) => state.user,
  );

  const orders = [
    {
      _id: 123415649878,
      orderItems: [
        {
          name: 'Iphone',
        },
      ],
      totalPrice: 120,
      orderStatus: 'Processing',
    },
  ];

  const columns: GridColDef[] = [
    {
      field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: 'itemsQty',
      headerName: 'Items Qty',
      type: 'number',
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: 'total',
      headerName: 'Total',
      type: 'number',
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: ' ',
      flex: 1,
      minWidth: 150,
      headerName: '',
      type: 'number',
      sortable: false,
      renderCell: (params) => (
        <Link to={`/user/order/${params.id}`}>
          <Button>
            <AiOutlineArrowRight size={20} />
          </Button>
        </Link>
      ),
    },
  ];
  interface test {
    id: number;
    itemsQty: number;
    total: string;
    status: string;
  }
  const rows: test[] = [];
  orders
    && orders.forEach((item, index) => {
      rows.push({
        id: index,
        itemsQty: item.orderItems.length,
        total: `${item.totalPrice}원`,
        status: item.orderStatus,
      });
    });

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        // disableSelectionOnClick
        autoHeight
      />
    </div>
  );
}
export default AllOrder;
