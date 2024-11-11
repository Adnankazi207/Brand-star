import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { 
    productListReducer, productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productReviewCreateReducer,
} from './reducers/productREducer';
import { cartReducer } from './reducers/cartReducer';
import { 
    userDeleteReducer,
    userLoginReducer,
    userListReducer, 
    userRegisterReducer, userDetailsReducer,
    userUpdateProfileReducer,
    userUpdateReducer,
    userByIdUpdateReducer
} from './reducers/userReducer';
import { 
    orderCreateReducer, orderDetailsReducer,
    orderMyListReducer,
    orderPayReducer,
    orderListReducer,
    orderDeliverReducer,
} from './reducers/orderreducer';

const reducer = combineReducers({
    productList: productListReducer,
	productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productUpdate: productUpdateReducer,
    productCreate: productCreateReducer,
    productReviewCreate: productReviewCreateReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
	orderMyList: orderMyListReducer,
    orderList: orderListReducer,
    userByIdUpdate: userByIdUpdateReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ?JSON.parse(localStorage.getItem('cartItems'))
    : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAdress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
	? JSON.parse(localStorage.getItem('paymentMethod'))
	: 'paypal';

    const initialState = {
        cart: {
            cartItems: cartItemsFromStorage,
            shippingAddress: shippingAddressFromStorage,
            paymentMethod: paymentMethodFromStorage,
        },
        userLogin: { userInfo: userInfoFromStorage },
    };

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;