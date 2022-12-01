import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Contacts } from '.'

const app = () => express(apiRoot, routes)

let contacts

beforeEach(async () => {
  contacts = await Contacts.create({})
})

test('POST /contacts 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ firstName: 'test', middleName: 'test', lastName: 'test', title: 'test', department: 'test', hireDate: 'test', note: 'test', imageUrl: 'test', defaultMailingAddress: 'test', createdBy: 'test', modifiedBy: 'test', isHidden: 'test', isDeleted: 'test', defaultEmailAddress: 'test', defaultPhoneNumber: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.firstName).toEqual('test')
  expect(body.middleName).toEqual('test')
  expect(body.lastName).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.department).toEqual('test')
  expect(body.hireDate).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.imageUrl).toEqual('test')
  expect(body.defaultMailingAddress).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isHidden).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.defaultEmailAddress).toEqual('test')
  expect(body.defaultPhoneNumber).toEqual('test')
})

test('GET /contacts 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /contacts/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${contacts.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contacts.id)
})

test('GET /contacts/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /contacts/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${contacts.id}`)
    .send({ firstName: 'test', middleName: 'test', lastName: 'test', title: 'test', department: 'test', hireDate: 'test', note: 'test', imageUrl: 'test', defaultMailingAddress: 'test', createdBy: 'test', modifiedBy: 'test', isHidden: 'test', isDeleted: 'test', defaultEmailAddress: 'test', defaultPhoneNumber: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contacts.id)
  expect(body.firstName).toEqual('test')
  expect(body.middleName).toEqual('test')
  expect(body.lastName).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.department).toEqual('test')
  expect(body.hireDate).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.imageUrl).toEqual('test')
  expect(body.defaultMailingAddress).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isHidden).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.defaultEmailAddress).toEqual('test')
  expect(body.defaultPhoneNumber).toEqual('test')
})

test('PUT /contacts/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ firstName: 'test', middleName: 'test', lastName: 'test', title: 'test', department: 'test', hireDate: 'test', note: 'test', imageUrl: 'test', defaultMailingAddress: 'test', createdBy: 'test', modifiedBy: 'test', isHidden: 'test', isDeleted: 'test', defaultEmailAddress: 'test', defaultPhoneNumber: 'test' })
  expect(status).toBe(404)
})

test('DELETE /contacts/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${contacts.id}`)
  expect(status).toBe(204)
})

test('DELETE /contacts/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
