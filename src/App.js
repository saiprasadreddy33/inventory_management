// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import authService from './services/authService';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import CompanyList from './components/Companies/CompanyList';
import CompanyDetails from './components/Companies/CompanyDetails';
import CompanyForm from './components/Companies/CompanyForm';
import UserList from './components/Users/UserList';
import UserDetails from './components/Users/UserDetails';
import UserForm from './components/Users/UserForm';
import RoleList from './components/Roles/RoleList';
import RoleDetails from './components/Roles/RoleDetails';
import RoleForm from './components/Roles/RoleForm';
import RegionList from './components/Regions/RegionList';
import RegionDetails from './components/Regions/RegionDetails';
import RegionForm from './components/Regions/RegionForm';
import ProductList from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails';
import ProductForm from './components/Products/ProductForm';
import PurchaseList from './components/Purchases/PurchaseList';
import PurchaseDetails from './components/Purchases/PurchaseDetails';
import PurchaseForm from './components/Purchases/PurchaseForm';
import PurchaseReturnList from './components/PurchaseReturns/PurchaseReturnList';
import PurchaseReturnDetails from './components/PurchaseReturns/PurchaseReturnDetails';
import PurchaseReturnForm from './components/PurchaseReturns/PurchaseReturnForm';
import ClosingStockForm from './components/ClosingStocks/ClosingStockForm';
import CustomerList from './components/Customers/CustomerList';
import CustomerDetails from './components/Customers/CustomerDetails';
import CustomerForm from './components/Customers/CustomerForm';
import SupplierList from './components/Suppliers/SupplierList';
import SupplierDetails from './components/Suppliers/SupplierDetails';
import SupplierForm from './components/Suppliers/SupplierForm';
import SalesmanList from './components/Salesmen/SalesmanList';
import SalesmanDetails from './components/Salesmen/SalesmanDetails';
import SalesmanForm from './components/Salesmen/SalesmanForm';
import BranchList from './components/Branches/BranchList';
import BranchDetails from './components/Branches/BranchDetails';
import BranchForm from './components/Branches/BranchForm';
//import BrandList from './components/br'
//import BrandDetails from './components/Brands/BrandDetails';
//import BrandForm from './components/Brands/BrandForm';
import ProductCategoryList from './components/ProductCategories/ProductCategoryList';
import ProductCategoryDetails from './components/ProductCategories/ProductCategoryDetails';
import ProductCategoryForm from './components/ProductCategories/ProductCategoryForm';

const App = () => {
  const userRole = authService.getUserRole();
  return (
      <Router>
          <div>
              <Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  {userRole === 'admin' && (
                      <>
                          <Route path="/companies" element={<CompanyList />} />
                          <Route path="/companies/new" element={<CompanyForm />} />
                          <Route path="/companies/:id" element={<CompanyDetails />} />
                          <Route path="/users" element={<UserList />} />
                          <Route path="/users/new" element={<UserForm />} />
                          <Route path="/users/:id" element={<UserDetails />} />
                          <Route path="/roles" element={<RoleList />} />
                          <Route path="/roles/new" element={<RoleForm />} />
                          <Route path="/roles/:id" element={<RoleDetails />} />
                          <Route path="/regions" element={<RegionList />} />
                          <Route path="/regions/new" element={<RegionForm />} />
                          <Route path="/regions/:id" element={<RegionDetails />} />
                          <Route path="/products" element={<ProductList />} />
                          <Route path="/products/new" element={<ProductForm />} />
                          <Route path="/products/:id" element={<ProductDetails />} />
                          <Route path="/purchases" element={<PurchaseList />} />
                          <Route path="/purchases/new" element={<PurchaseForm />} />
                          <Route path="/purchases/:id" element={<PurchaseDetails />} />
                          <Route path="/purchase-returns" element={<PurchaseReturnList />} />
                          <Route path="/purchase-returns/new" element={<PurchaseReturnForm />} />
                          <Route path="/purchase-returns/:id" element={<PurchaseReturnDetails />} />
                          <Route path="/closing-stocks/new" element={<ClosingStockForm />} />
                          <Route path="/customers" element={<CustomerList />} />
                          <Route path="/customers/new" element={<CustomerForm />} />
                          <Route path="/customers/:id" element={<CustomerDetails />} />
                          <Route path="/suppliers" element={<SupplierList />} />
                          <Route path="/suppliers/new" element={<SupplierForm />} />
                          <Route path="/suppliers/:id" element={<SupplierDetails />} />
                          <Route path="/salesmen" element={<SalesmanList />} />
                          <Route path="/salesmen/new" element={<SalesmanForm />} />
                          <Route path="/salesmen/:id" element={<SalesmanDetails />} />
                          <Route path="/branches" element={<BranchList />} />
                          <Route path="/branches/new" element={<BranchForm />} />
                          <Route path="/branches/:id" element={<BranchDetails />} />
                          <Route path="/brands" element={<BrandList />} />
                          <Route path="/brands/new" element={<BrandForm />} />
                          <Route path="/brands/:id" element={<BrandDetails />} />
                          <Route path="/product-categories" element={<ProductCategoryList />} />
                          <Route path="/product-categories/new" element={<ProductCategoryForm />} />
                          <Route path="/product-categories/:id" element={<ProductCategoryDetails />} />
                      </>
                  )}
                  {userRole === 'manager' && (
                      <>
                          <Route path="/companies" element={<CompanyList />} />
                          <Route path="/companies/:id" element={<CompanyDetails />} />
                          <Route path="/users" element={<UserList />} />
                          <Route path="/users/:id" element={<UserDetails />} />
                      </>
                  )}
                  <Route path="/" element={<Login />} />
              </Route>
          </div>
      </Router>
  );
};

export default App;