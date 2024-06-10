import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout.js/index.js';
import CompanyList from './components/Companies/CompanyList.js';
import CompanyDetails from './components/Companies/CompanyDetails';
import CompanyForm from './components/Companies/CompanyForm';
import UserList from './components/Users/UserList.js/index.js';
import UserDetails from './components/Users/UserDetails';
import UserForm from './components/Users/UserForm';
import RoleList from './components/Roles/RoleList.js/index.js';
import RoleDetails from './components/Roles/RoleDetails';
import RoleForm from './components/Roles/RoleForm';
import RegionList from './components/Regions/RegionList.js/index.js';
import RegionDetails from './components/Regions/RegionDetails';
import RegionForm from './components/Regions/RegionForm';
import ProductList from './components/Products/ProductList.js/index.js';
import ProductDetails from './components/Products/ProductDetails';
import ProductForm from './components/Products/ProductForm';
import PurchaseList from './components/Purchases/PurchaseList.js/index.js';
import PurchaseDetails from './components/Purchases/PurchaseDetails';
import PurchaseForm from './components/Purchases/PurchaseForm';
import PurchaseReturnList from './components/PurchaseReturns/PurchaseReturnList.js/index.js';
import PurchaseReturnDetails from './components/PurchaseReturns/PurchaseReturnDetails';
import PurchaseReturnForm from './components/PurchaseReturns/PurchaseReturnForm';
import ClosingStockForm from './components/ClosingStocks/ClosingStockForm';
import CustomerList from './components/Customers/CustomerList.js/index.js';
import CustomerDetails from './components/Customers/CustomerDetails';
import CustomerForm from './components/Customers/CustomerForm';
import SupplierList from './components/Suppliers/SupplierList.js/index.js';
import SupplierDetails from './components/Suppliers/SupplierDetails';
import SupplierForm from './components/Suppliers/SupplierForm';
import SalesmanList from './components/Salesmen/SalesmanList.js/index.js';
import SalesmanDetails from './components/Salesmen/SalesmanDetails';
import SalesmanForm from './components/Salesmen/SalesmanForm';
import BranchList from './components/Branches/BranchList.js/index.js';
import BranchDetails from './components/Branches/BranchDetails';
import BranchForm from './components/Branches/BranchForm';
import BrandList from './components/Brands/BrandList';
import BrandDetails from './components/Brands/BrandDetails';
import BrandForm from './components/Brands/BrandForm';
import ProductCategoryList from './components/ProductCategories/ProductCategoryList.js/index.js';
import ProductCategoryDetails from './components/ProductCategories/ProductCategoryDetails';
import ProductCategoryForm from './components/ProductCategories/ProductCategoryForm';

const Routing = () => {
  return
  (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/companies" exact component={CompanyList} />
        <Route path="/companies/new" exact component={CompanyForm} />
        <Route path="/companies/:id" exact component={CompanyDetails} />
        <Route path="/users" exact component={UserList} />
        <Route path="/users/new" exact component={UserForm} />
        <Route path="/users/:id" exact component={UserDetails} />
        <Route path="/roles" exact component={RoleList} />
        <Route path="/roles/new" exact component={RoleForm} />
        <Route path="/roles/:id" exact component={RoleDetails} />
        <Route path="/regions" exact component={RegionList} />
        <Route path="/regions/new" exact component={RegionForm} />
        <Route path="/regions/:id" exact component={RegionDetails} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/products/new" exact component={ProductForm} />
        <Route path="/products/:id" exact component={ProductDetails} />
        <Route path="/purchases" exact component={PurchaseList} />
        <Route path="/purchases/new" exact component={PurchaseForm} />
        <Route path="/purchases/:id" exact component={PurchaseDetails} />
        <Route path="/purchase-returns" exact component={PurchaseReturnList} />
        <Route path="/purchase-returns/new" exact component={PurchaseReturnForm} />
        <Route path="/purchase-returns/:id" exact component={PurchaseReturnDetails} />
        <Route path="/closing-stocks/new" exact component={ClosingStockForm} />
        <Route path="/customers" exact component={CustomerList} />
        <Route path="/customers/new" exact component={CustomerForm} />
        <Route path="/customers/:id" exact component={CustomerDetails} />
        <Route path="/suppliers" exact component={SupplierList} />
        <Route path="/suppliers/new" exact component={SupplierForm} />
        <Route path="/suppliers/:id" exact component={SupplierDetails} />
        <Route path="/salesmen" exact component={SalesmanList} />
        <Route path="/salesmen/new" exact component={SalesmanForm} />
        <Route path="/salesmen/:id" exact component={SalesmanDetails} />
        <Route path="/branches" exact component={BranchList} />
        <Route path="/branches/new" exact component={BranchForm} />
        <Route path="/branches/:id" exact component={BranchDetails} />
        <Route path="/brands" exact component={BrandList} />
        <Route path="/brands/new" exact component={BrandForm} />
        <Route path="/brands/:id" exact component={BrandDetails} />
        <Route path="/product-categories" exact component={ProductCategoryList} />
        <Route path="/product-categories/new" exact component={ProductCategoryForm} />
        <Route path="/product-categories/:id" exact component={ProductCategoryDetails} />
      </Switch>
    </Router>
  );
};

export default Routing;
