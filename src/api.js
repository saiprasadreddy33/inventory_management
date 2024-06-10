const API_URL = 'http://localhost:9000/api';

const getToken = () => {
  return localStorage.getItem('token');
};

const makeRequest = async (url, method, body) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(`${API_URL}${url}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};

const api = {
  // Auth Endpoints
  login: async (username, password) => {
    return makeRequest('/login', 'POST', { username, password });
  },
  logout: async () => {
    return makeRequest('/logout', 'POST');
  },

  // Company Endpoints
  getCompany: async (id) => {
    return makeRequest(`/companies/${id}`, 'GET');
  },
  updateCompany: async (id, data) => {
    return makeRequest(`/companies/${id}`, 'PUT', data);
  },
  deleteCompany: async (id) => {
    return makeRequest(`/companies/${id}`, 'DELETE');
  },

  // User Endpoints
  getUsers: async () => {
    return makeRequest('/users', 'GET');
  },
  getUser: async (id) => {
    return makeRequest(`/users/${id}`, 'GET');
  },
  createUser: async (data) => {
    return makeRequest('/users', 'POST', data);
  },
  updateUser: async (id, data) => {
    return makeRequest(`/users/${id}`, 'PUT', data);
  },
  deleteUser: async (id) => {
    return makeRequest(`/users/${id}`, 'DELETE');
  },

  // Role Endpoints
  getRoles: async () => {
    return makeRequest('/roles', 'GET');
  },
  getRole: async (id) => {
    return makeRequest(`/roles/${id}`, 'GET');
  },
  createRole: async (data) => {
    return makeRequest('/roles', 'POST', data);
  },
  updateRole: async (id, data) => {
    return makeRequest(`/roles/${id}`, 'PUT', data);
  },
  deleteRole: async (id) => {
    return makeRequest(`/roles/${id}`, 'DELETE');
  },
  grantAccess: async (roleId, accessId) => {
    return makeRequest(`/roles/${roleId}/access/${accessId}`, 'POST');
  },
  revokeAccess: async (roleId, accessId) => {
    return makeRequest(`/roles/${roleId}/access/${accessId}`, 'DELETE');
  },

  // Access Endpoints
  getAccessList: async () => {
    return makeRequest('/access', 'GET');
  },

  // Region Endpoints
  getRegions: async () => {
    return makeRequest('/regions', 'GET');
  },
  getRegion: async (id) => {
    return makeRequest(`/regions/${id}`, 'GET');
  },
  createRegion: async (data) => {
    return makeRequest('/regions', 'POST', data);
  },
  updateRegion: async (id, data) => {
    return makeRequest(`/regions/${id}`, 'PUT', data);
  },
  addBranchToRegion: async (regionId, branchId) => {
    return makeRequest(`/regions/${regionId}/branches/${branchId}`, 'POST');
  },
  removeBranchFromRegion: async (regionId, branchId) => {
    return makeRequest(`/regions/${regionId}/branches/${branchId}`, 'DELETE');
  },
  deleteRegion: async (id) => {
    return makeRequest(`/regions/${id}`, 'DELETE');
  },

  // Product Endpoints
  getProducts: async () => {
    return makeRequest('/products', 'GET');
  },
  getProduct: async (id) => {
    return makeRequest(`/products/${id}`, 'GET');
  },
  createProduct: async (data) => {
    return makeRequest('/products', 'POST', data);
  },
  updateProduct: async (id, data) => {
    return makeRequest(`/products/${id}`, 'PUT', data);
  },
  deleteProduct: async (id) => {
    return makeRequest(`/products/${id}`, 'DELETE');
  },

  // Purchase Endpoints
  getPurchases: async () => {
    return makeRequest('/purchases', 'GET');
  },
  getPurchase: async (id) => {
    return makeRequest(`/purchases/${id}`, 'GET');
  },
  createPurchase: async (data) => {
    return makeRequest('/purchases', 'POST', data);
  },
  updatePurchase: async (id, data) => {
    return makeRequest(`/purchases/${id}`, 'PUT', data);
  },

  // Purchase Return Endpoints
  getPurchaseReturns: async () => {
    return makeRequest('/purchase-returns', 'GET');
  },
  getPurchaseReturn: async (id) => {
    return makeRequest(`/purchase-returns/${id}`, 'GET');
  },
  createPurchaseReturn: async (data) => {
    return makeRequest('/purchase-returns', 'POST', data);
  },
  updatePurchaseReturn: async (id, data) => {
    return makeRequest(`/purchase-returns/${id}`, 'PUT', data);
  },

  // Closing Stock Endpoints
  closeStock: async (data) => {
    return makeRequest('/closing_stocks', 'POST', data);
  },

  // Customer Endpoints
  getCustomers: async () => {
    return makeRequest('/customers', 'GET');
  },
  getCustomer: async (id) => {
    return makeRequest(`/customers/${id}`, 'GET');
  },
  createCustomer: async (data) => {
    return makeRequest('/customers', 'POST', data);
  },
  updateCustomer: async (id, data) => {
    return makeRequest(`/customers/${id}`, 'PUT', data);
  },
  deleteCustomer: async (id) => {
    return makeRequest(`/customers/${id}`, 'DELETE');
  },

  // Supplier Endpoints
  getSuppliers: async () => {
    return makeRequest('/suppliers', 'GET');
  },
  getSupplier: async (id) => {
    return makeRequest(`/suppliers/${id}`, 'GET');
  },
  createSupplier: async (data) => {
    return makeRequest('/suppliers', 'POST', data);
  },
  updateSupplier: async (id, data) => {
    return makeRequest(`/suppliers/${id}`, 'PUT', data);
  },
  deleteSupplier: async (id) => {
    return makeRequest(`/suppliers/${id}`, 'DELETE');
  },

  // Salesman Endpoints
  getSalesmen: async () => {
    return makeRequest('/salesmen', 'GET');
  },
  getSalesman: async (id) => {
    return makeRequest(`/salesmen/${id}`, 'GET');
  },
  createSalesman: async (data) => {
    return makeRequest('/salesmen', 'POST', data);
  },
  updateSalesman: async (id, data) => {
    return makeRequest(`/salesmen/${id}`, 'PUT', data);
  },
  deleteSalesman: async (id) => {
    return makeRequest(`/salesmen/${id}`, 'DELETE');
  },

  // Branch Endpoints
  getBranches: async () => {
    return makeRequest('/branches', 'GET');
  },
  getBranch: async (id) => {
    return makeRequest(`/branches/${id}`, 'GET');
  },
  createBranch: async (data) => {
    return makeRequest('/branches', 'POST', data);
  },
  updateBranch: async (id, data) => {
    return makeRequest(`/branches/${id}`, 'PUT', data);
  },
  deleteBranch: async (id) => {
    return makeRequest(`/branches/${id}`, 'DELETE');
  },

  // Brand Endpoints
  getBrands: async () => {
    return makeRequest('/brands', 'GET');
  },
  getBrand: async (id) => {
    return makeRequest(`/brands/${id}`, 'GET');
  },
  createBrand: async (data) => {
    return makeRequest('/brands', 'POST', data);
  },
  updateBrand: async (id, data) => {
    return makeRequest(`/brands/${id}`, 'PUT', data);
  },
  deleteBrand: async (id) => {
    return makeRequest(`/brands/${id}`, 'DELETE');
  },

  // Product Category Endpoints
  getProductCategories: async () => {
    return makeRequest('/product-categories', 'GET');
  },
  getProductCategory: async (id) => {
    return makeRequest(`/product-categories/${id}`, 'GET');
  },
  createProductCategory: async (data) => {
    return makeRequest('/product-categories', 'POST', data);
  },
  updateProductCategory: async (id, data) => {
    return makeRequest(`/product-categories/${id}`, 'PUT', data);
  },
  deleteProductCategory: async (id) => {
    return makeRequest(`/product-categories/${id}`, 'DELETE');
  },

  // Receive Endpoints
  getReceives: async () => {
    return makeRequest('/receives', 'GET');
  },
  getReceive: async (id) => {
    return makeRequest(`/receives/${id}`, 'GET');
  },
  createReceive: async (data) => {
    return makeRequest('/receives', 'POST', data);
  },
  updateReceive: async (id, data) => {
    return makeRequest(`/receives/${id}`, 'PUT', data);
  },

  // Shelf Endpoints
  getShelves: async () => {
    return makeRequest('/shelves', 'GET');
  },
  getShelf: async (id) => {
    return makeRequest(`/shelves/${id}`, 'GET');
  },
  createShelf: async (data) => {
    return makeRequest('/shelves', 'POST', data);
  },
  updateShelf: async (id, data) => {
    return makeRequest(`/shelves/${id}`, 'PUT', data);
  },
  deleteShelf: async (id) => {
    return makeRequest(`/shelves/${id}`, 'DELETE');
  },

  // Receive Return Endpoints
  getReceiveReturns: async () => {
    return makeRequest('/receive-returns', 'GET');
  },
  getReceiveReturn: async (id) => {
    return makeRequest(`/receive-returns/${id}`, 'GET');
  },
  createReceiveReturn: async (data) => {
    return makeRequest('/receive-returns', 'POST', data);
  },
  updateReceiveReturn: async (id, data) => {
    return makeRequest(`/receive-returns/${id}`, 'PUT', data);
  },

  // Sales Order Endpoints
  getSalesOrders: async () => {
    return makeRequest('/sales-orders', 'GET');
  },
  getSalesOrder: async (id) => {
    return makeRequest(`/sales-orders/${id}`, 'GET');
  },
  createSalesOrder: async (data) => {
    return makeRequest('/sales-orders', 'POST', data);
  },
  updateSalesOrder: async (id, data) => {
    return makeRequest(`/sales-orders/${id}`, 'PUT', data);
  },

  // Sales Order Return Endpoints
  getSalesOrderReturns: async () => {
    return makeRequest('/sales-order-returns', 'GET');
  },
  getSalesOrderReturn: async (id) => {
    return makeRequest(`/sales-order-returns/${id}`, 'GET');
  },
  createSalesOrderReturn: async (data) => {
    return makeRequest('/sales-order-returns', 'POST', data);
  },
  updateSalesOrderReturn: async (id, data) => {
    return makeRequest(`/sales-order-returns/${id}`, 'PUT', data);
  },

  // Delivery Endpoints
  getDeliveries: async () => {
    return makeRequest('/deliveries', 'GET');
  },
  getDelivery: async (id) => {
    return makeRequest(`/deliveries/${id}`, 'GET');
  },
  createDelivery: async (data) => {
    return makeRequest('/deliveries', 'POST', data);
  },
  updateDelivery: async (id, data) => {
    return makeRequest(`/deliveries/${id}`, 'PUT', data);
  },

  // Delivery Return Endpoints
  getDeliveryReturns: async () => {
    return makeRequest('/delivery-returns', 'GET');
  },
  getDeliveryReturn: async (id) => {
    return makeRequest(`/delivery-returns/${id}`, 'GET');
  },
  createDeliveryReturn: async (data) => {
    return makeRequest('/delivery-returns', 'POST', data);
  },
  updateDeliveryReturn: async (id, data) => {
    return makeRequest(`/delivery-returns/${id}`, 'PUT', data);
  },
};

export default api;

