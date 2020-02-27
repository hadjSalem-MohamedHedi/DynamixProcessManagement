using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Web.Cors;
using System.Web.Http.Cors;


using DPM_Api_VBETA.webService;
namespace DPM_Api_VBETA.Controllers
{
    [RoutePrefix("api/DPM")]
    public class ConsultanProjectController : ApiController
    {

        private string allJson = "";



        [HttpGet]
        [Route("ListeProjDuCons/{idCons}")]
        public HttpResponseMessage ListeProjDuCons(int idCons)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootConsProj ListeConsProj = new RootConsProj();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeProjDuCons(idCons, ref ListeConsProj);
                int i = 0;
                string id;
                string codeConsultant;
                string CodeProjet;
                string DateAfectation;
                string nomprojet;


                string allJson = "[";
                int j = ListeConsProj.RecConProj.Length;
                while (i < j)
                {
                    id = ListeConsProj.RecConProj[i].id.ToString();
                    codeConsultant = ListeConsProj.RecConProj[i].codeConsultant.ToString();
                    CodeProjet = ListeConsProj.RecConProj[i].CodeProjet.ToString();
                    DateAfectation = ListeConsProj.RecConProj[i].DateAfectation.ToString();
                    nomprojet = ListeConsProj.RecConProj[i].nomprojet.ToString();

                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"codeConsultant\": " + "\"" + codeConsultant +
                         "\"," + "\"CodeProjet\": " + "\"" + CodeProjet +
                         "\"," + "\"DateAfectation\": " + "\"" + DateAfectation +
                         "\"," + "\"nomprojet\": " + "\"" + nomprojet +

                        "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i + 1;

                }
                allJson += " ]";
                response.Content = new StringContent(allJson);
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }


        [HttpGet]
        [Route("DetailProject/{idProjct}")]
        public HttpResponseMessage DetailProject(int idProjct)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootProject Project = new RootProject();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.DetailProject(ref Project, idProjct);
                int i = 0;
                string id;
                string titre;
                string description;
                string datecre;
                string datdeb;
                string datefin;

                string allJson = "[";
                int j = Project.RecProject.Length;
                while (i < j)
                {
                    id = Project.RecProject[i].id.ToString();
                    titre = Project.RecProject[i].titre.ToString();
                    description = Project.RecProject[i].description.ToString();
                    datecre = Project.RecProject[i].datecreation.ToString();
                    datdeb = Project.RecProject[i].datedebut.ToString();
                    datefin = Project.RecProject[i].datefin.ToString();


                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + titre +
                         "\"," + "\"description\": " + "\"" + description +
                         "\"," + "\"datecre\": " + "\"" + datecre +
                         "\"," + "\"datdeb\": " + "\"" + datdeb +
                         "\"," + "\"datefin\": " + "\"" + datefin +


                        "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i + 1;

                }
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }




        [HttpGet]
        [Route("UpdateStatTask/{idtask}/{status}")]
        public HttpResponseMessage DetailProject(int idtask,string status)
        {
            string res;
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootProject Project = new RootProject();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
               if( services.UpdateStatTask(idtask, status))
                { res = "true"; }
                else { res = "false"; }
                int i = 0;
          
                string allJson = "[";
               


                    allJson += "{ \"res\": " + "\"" + res +
                        
                        "\"}";
                  

                
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }




    }
}

