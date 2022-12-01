import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Companies } from '.'

const app = () => express(apiRoot, routes)

let companies

beforeEach(async () => {
  companies = await Companies.create({})
})

test('POST /companies 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', note: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('GET /companies 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /companies/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${companies.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(companies.id)
})

test('GET /companies/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /companies/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${companies.id}`)
    .send({ name: 'test', note: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(companies.id)
  expect(body.name).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('PUT /companies/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', note: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(404)
})

test('DELETE /companies/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${companies.id}`)
  expect(status).toBe(204)
})

test('DELETE /companies/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
