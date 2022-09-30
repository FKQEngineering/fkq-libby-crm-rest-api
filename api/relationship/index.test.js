import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Relationship } from '.'

const app = () => express(apiRoot, routes)

let relationship

beforeEach(async () => {
  relationship = await Relationship.create({})
})

test('GET /relationships 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /relationships/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${relationship.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(relationship.id)
})

test('GET /relationships/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

