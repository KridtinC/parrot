// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package svc

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// BillClient is the client API for Bill service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BillClient interface {
	Add(ctx context.Context, in *AddBillRequest, opts ...grpc.CallOption) (*AddBillResponse, error)
	Get(ctx context.Context, in *GetBillRequest, opts ...grpc.CallOption) (*GetBillResponse, error)
	GetAll(ctx context.Context, in *GetAllBillRequest, opts ...grpc.CallOption) (*GetAllBillResponse, error)
}

type billClient struct {
	cc grpc.ClientConnInterface
}

func NewBillClient(cc grpc.ClientConnInterface) BillClient {
	return &billClient{cc}
}

func (c *billClient) Add(ctx context.Context, in *AddBillRequest, opts ...grpc.CallOption) (*AddBillResponse, error) {
	out := new(AddBillResponse)
	err := c.cc.Invoke(ctx, "/svc.Bill/Add", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *billClient) Get(ctx context.Context, in *GetBillRequest, opts ...grpc.CallOption) (*GetBillResponse, error) {
	out := new(GetBillResponse)
	err := c.cc.Invoke(ctx, "/svc.Bill/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *billClient) GetAll(ctx context.Context, in *GetAllBillRequest, opts ...grpc.CallOption) (*GetAllBillResponse, error) {
	out := new(GetAllBillResponse)
	err := c.cc.Invoke(ctx, "/svc.Bill/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BillServer is the server API for Bill service.
// All implementations must embed UnimplementedBillServer
// for forward compatibility
type BillServer interface {
	Add(context.Context, *AddBillRequest) (*AddBillResponse, error)
	Get(context.Context, *GetBillRequest) (*GetBillResponse, error)
	GetAll(context.Context, *GetAllBillRequest) (*GetAllBillResponse, error)
	mustEmbedUnimplementedBillServer()
}

// UnimplementedBillServer must be embedded to have forward compatible implementations.
type UnimplementedBillServer struct {
}

func (UnimplementedBillServer) Add(context.Context, *AddBillRequest) (*AddBillResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Add not implemented")
}
func (UnimplementedBillServer) Get(context.Context, *GetBillRequest) (*GetBillResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedBillServer) GetAll(context.Context, *GetAllBillRequest) (*GetAllBillResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAll not implemented")
}
func (UnimplementedBillServer) mustEmbedUnimplementedBillServer() {}

// UnsafeBillServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BillServer will
// result in compilation errors.
type UnsafeBillServer interface {
	mustEmbedUnimplementedBillServer()
}

func RegisterBillServer(s grpc.ServiceRegistrar, srv BillServer) {
	s.RegisterService(&Bill_ServiceDesc, srv)
}

func _Bill_Add_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddBillRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillServer).Add(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/svc.Bill/Add",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillServer).Add(ctx, req.(*AddBillRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bill_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBillRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/svc.Bill/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillServer).Get(ctx, req.(*GetBillRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bill_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAllBillRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/svc.Bill/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillServer).GetAll(ctx, req.(*GetAllBillRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Bill_ServiceDesc is the grpc.ServiceDesc for Bill service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Bill_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "svc.Bill",
	HandlerType: (*BillServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Add",
			Handler:    _Bill_Add_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _Bill_Get_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _Bill_GetAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/svc/bill_api.proto",
}
