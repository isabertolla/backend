// config/supabaseClient.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('ERRO: Variáveis de ambiente do Supabase não configuradas no .env!');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;