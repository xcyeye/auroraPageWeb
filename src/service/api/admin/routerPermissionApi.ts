import { baseAxiosRequestConfig } from '@/constants';
import { request } from '@/service/request';
import type { Condition, PageData } from '@/bean/core/bean';
import type {RouterPermission} from "@/bean/pojo/admin/RouterPermission";
import type {AdminRouterDto} from "@/bean/dto/AdminRouterDto";

/** 接口前缀 */
const apiPrefix = '/admin/routerPermission/';
type beanType = RouterPermission;
type viewBeanType = any;

function _baseApi() {
	/**
	 * 插入一条数据
	 * @param data
	 */
	function insertData(data: beanType) {
		return request.post<void>(`${apiPrefix}insertRouterPermission`, data, baseAxiosRequestConfig);
	}

	/**
	 * 插入多条数据
	 * @deprecated
	 * @param data
	 */
	function batchInsertData(data: Array<beanType>) {
		return request.post<void>(`${apiPrefix}`, data, baseAxiosRequestConfig);
	}

	/**
	 * 物理删除数据
	 * @param data
	 */
	function physicalDeleteData(data: beanType) {
		return request.post<number>(`${apiPrefix}physicalDeleteRouterPermission`, data, baseAxiosRequestConfig);
	}

	/**
	 * 逻辑删除数据
	 * @deprecated
	 * @param data
	 */
	function logicDeleteData(data: beanType) {
		return request.post<number>(`${apiPrefix}`, data, baseAxiosRequestConfig);
	}

	/**
	 * 更新数据
	 * @param data
	 */
	function updateData(data: beanType) {
		return request.post<number>(`${apiPrefix}updateRouterPermission`, data, baseAxiosRequestConfig);
	}

	/**
	 * 批量更新数据
	 * @deprecated
	 * @param data
	 */
	function batchUpdateData(data: beanType) {
		return request.post<number>(`${apiPrefix}`, data, baseAxiosRequestConfig);
	}

	/**
	 * 根据条件查询满足要求的数据
	 * @deprecated
	 * @param data
	 */
	function queryListDataByCondition(data: Condition) {
		return request.post<PageData<viewBeanType>>(`${apiPrefix}`, data, baseAxiosRequestConfig);
	}

	function queryAllAdminRouterInfoByPermissionUid(data: Condition) {
		return request.post<Array<AdminRouterDto>>(`${apiPrefix}queryAllAdminRouterInfoByPermissionUid`, data, baseAxiosRequestConfig);
	}

	/**
	 * 根据uid查询一条数据
	 * @deprecated
	 * @param data
	 */
	function queryOneDataByUid(data: beanType) {
		return request.post<viewBeanType>(`${apiPrefix}`, data, baseAxiosRequestConfig);
	}

	/**
	 * 根据条件查询一条数据
	 * @deprecated
	 * @param data
	 */
	function queryOneData(data: beanType) {
		return request.post<viewBeanType>(`${apiPrefix}`, data, baseAxiosRequestConfig);
	}

	return {
		queryOneData,
		queryOneDataByUid,
		queryListDataByCondition,
		batchUpdateData,
		updateData,
		logicDeleteData,
		physicalDeleteData,
		insertData,
		batchInsertData,
		queryAllAdminRouterInfoByPermissionUid
	};
}

export const baseApi = _baseApi();
