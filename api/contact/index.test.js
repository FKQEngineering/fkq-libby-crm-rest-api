import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Contact } from '.'

const app = () => express(apiRoot, routes)

let contact

beforeEach(async () => {
  contact = await Contact.create({})
})

test('POST /contacts 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({firstName: 'test', middleName: 'test', lastName: 'test', hireDate: 'test', title: 'test', company: 'test', department: 'test', notes: 'test', gender:'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.firstName).toEqual('test')
  expect(body.middleName).toEqual('test')
  expect(body.lastName).toEqual('test')
  expect(body.hireDate).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.company).toEqual('test')
  expect(body.department).toEqual('test')
  expect(body.notes).toEqual('test')
  expect(body.gender).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
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
    .get(`${apiRoot}/${contact.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contact.id)
})

test('GET /contacts/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /contacts/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${contact.id}`)
    .send({firstName: 'test', middleName: 'test', lastName: 'test', hireDate: 'test', title: 'test', company: 'test', department: 'test', notes: 'test', gender:'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contact.id)
  expect(body.firstName).toEqual('test')
  expect(body.middleName).toEqual('test')
  expect(body.lastName).toEqual('test')
  expect(body.hireDate).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.company).toEqual('test')
  expect(body.department).toEqual('test')
  expect(body.notes).toEqual('test')
  expect(body.gender).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('PUT /contacts/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({firstName: 'test', middleName: 'test', lastName: 'test', hireDate: 'test', title: 'test', company: 'test', department: 'test', notes: 'test', gender:'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
  expect(status).toBe(404)
})

test('DELETE /contacts/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${contact.id}`)
  expect(status).toBe(204)
})

test('DELETE /contacts/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
